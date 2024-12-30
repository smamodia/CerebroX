import os
from textwrap import dedent
from langchain_ollama import ChatOllama
from typing import Dict, List, Optional
import json

class TripTasks:
    def __init__(self):
        self.ollama_model = ChatOllama(model="gemma:2b")

    def _format_response(self, response) -> Dict:
        """Convert the response to a structured format"""
        # Extract content from AIMessage object
        response_text = response.content if hasattr(response, 'content') else str(response)
        
        try:
            # Try to parse as JSON first
            return json.loads(response_text)
        except json.JSONDecodeError:
            # If not JSON, return as structured text
            return {"content": response_text}

    def identify_task(self, origin: str, cities: List[str], interests: str, date_range: str) -> Dict:
        prompt = dedent(f"""
        Please provide a structured analysis in JSON format for selecting the best city for a trip.
        Include the following keys in your response:
        - recommended_city
        - reasoning
        - weather_analysis
        - seasonal_events
        - cost_estimate

        Input Parameters:
        - Origin: {origin}
        - City Options: {', '.join(cities)}
        - Trip Date: {date_range}
        - Traveler Interests: {interests}
        """)
        response = self.ollama_model.invoke(input=prompt)
        return self._format_response(response)

    def gather_task(self, city: str, interests: str, date_range: str) -> Dict:
        prompt = dedent(f"""
        Please provide a structured city guide in JSON format with the following sections:
        - main_attractions
        - hidden_gems
        - local_cuisine
        - cultural_insights
        - practical_tips

        Input Parameters:
        - City: {city}
        - Trip Date: {date_range}
        - Traveler Interests: {interests}
        """)
        response = self.ollama_model.invoke(input=prompt)
        return self._format_response(response)

    def plan_task(self, city: str, interests: str, date_range: str) -> Dict:
        prompt = dedent(f"""
        Please create a structured 7-day itinerary in JSON format with the following sections:
        - daily_schedules (array of 7 days)
        - weather_forecast
        - packing_list
        - budget_breakdown
        - accommodations
        - dining_recommendations

        Input Parameters:
        - City: {city}
        - Trip Date: {date_range}
        - Traveler Interests: {interests}
        """)
        response = self.ollama_model.invoke(input=prompt)
        return self._format_response(response)

class TripCrew:
    def __init__(self, origin: str, cities: List[str], date_range: str, interests: str):
        self.tasks = TripTasks()
        self.origin = origin
        self.cities = cities
        self.date_range = date_range
        self.interests = interests

    def _print_section(self, title: str, content: Dict, indent: int = 0):
        """Helper method to print formatted sections"""
        print("\n" + "=" * 50)
        print(f"{' ' * indent}## {title}")
        print("=" * 50)
        
        if isinstance(content, dict):
            for key, value in content.items():
                if isinstance(value, (dict, list)):
                    print(f"\n{' ' * indent}{key.replace('_', ' ').title()}:")
                    print(json.dumps(value, indent=2))
                else:
                    print(f"\n{' ' * indent}{key.replace('_', ' ').title()}:")
                    print(f"{' ' * (indent + 2)}{value}")
        else:
            print(content)

    def run(self) -> Optional[Dict]:
        try:
            print("\nAnalyzing trip options...")
            city_report = self.tasks.identify_task(self.origin, self.cities, self.interests, self.date_range)
            self._print_section("City Analysis Report", city_report)

            # Use the recommended city for subsequent tasks
            recommended_city = city_report.get("recommended_city", self.cities[0])
            
            print("\nGathering city insights...")
            city_guide = self.tasks.gather_task(recommended_city, self.interests, self.date_range)
            self._print_section("Detailed City Guide", city_guide)

            print("\nCreating itinerary...")
            itinerary = self.tasks.plan_task(recommended_city, self.interests, self.date_range)
            self._print_section("7-Day Itinerary", itinerary)

            return {
                "city_report": city_report,
                "city_guide": city_guide,
                "itinerary": itinerary
            }

        except Exception as e:
            print(f"An error occurred: {e}")
            return None

def main():
    print("\n📍 Welcome to Trip Planner Crew")
    print('=' * 50)
    
    location = input("From where will you be traveling? ")
    cities = input("Which cities are you interested in visiting? (comma-separated): ")
    date_range = input("What is your planned travel date range? ")
    interests = input("What are your main interests and hobbies? ")

    trip_crew = TripCrew(
        location,
        [city.strip() for city in cities.split(",")],
        date_range,
        interests
    )

    result = trip_crew.run()
    
    if result:
        print("\n🎉 Trip planning completed successfully!")
    else:
        print("\n❌ Sorry, the trip plan could not be generated.")

if __name__ == "__main__":
    main()