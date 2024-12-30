from crewai import Task
from textwrap import dedent
from datetime import date

class TripTasks:
    def identify_task(self, agent, origin, cities, interests, range):
        return Task(
            description=dedent(f"""
                Analyze and select the best city for the trip based 
                on specific criteria such as weather patterns, seasonal
                events, and travel costs. This task involves comparing
                multiple cities, considering factors like current weather
                conditions, upcoming cultural or seasonal events, and
                overall travel expenses.
                
                Your final answer must be a detailed
                report on the chosen city, and everything you found out
                about it, including:
                - Actual flight costs
                - Weather forecast
                - Top attractions
                {self.__tip_section()}

                Traveling from: {origin}
                City Options: {cities}
                Trip Date: {range}
                Traveler Interests: {interests}
            """),
            agent=agent,
            expected_output=dedent("""
                - **Chosen City**: [City Name]
                - **Reason for Selection**: [Detailed Explanation]
                - **Flight Costs**: [Cost Details]
                - **Weather Forecast**: [Weather Summary]
                - **Top Attractions**: 
                  1. Attraction 1: [Description]
                  2. Attraction 2: [Description]
                  ...
            """)
        )

    def gather_task(self, agent, origin, interests, range):
        return Task(
            description=dedent(f"""
                As a local expert on this city you must compile an 
                in-depth guide for someone traveling there and wanting 
                to have THE BEST trip ever!
                Gather information about key attractions, local customs,
                special events, and daily activity recommendations.
                Find the best spots to go to, the kind of place only a
                local would know.
                This guide should provide a thorough overview of what 
                the city has to offer, including:
                - Hidden gems
                - Cultural hotspots
                - Must-visit landmarks
                - Weather forecasts
                - High-level costs
                {self.__tip_section()}

                Trip Date: {range}
                Traveling from: {origin}
                Traveler Interests: {interests}
            """),
            agent=agent,
            expected_output=dedent("""
                - **City Guide**:
                  - **Top 5 Attractions**:
                    1. [Attraction Name]: [Description]
                    ...
                  - **Hidden Gems**: 
                    - [Gem Name]: [Description]
                    ...
                  - **Cultural Hotspots**:
                    - [Hotspot Name]: [Description]
                    ...
                  - **Weather Summary**: [Detailed Weather Info]
                  - **High-Level Costs**:
                    - Accommodation: [Cost]
                    - Dining: [Cost]
                    - Transportation: [Cost]
            """)
        )

    def plan_task(self, agent, origin, interests, range):
        return Task(
            description=dedent(f"""
                Expand this guide into a full 7-day travel 
                itinerary with detailed per-day plans, including 
                weather forecasts, places to eat, packing suggestions, 
                and a budget breakdown.
                
                You MUST suggest actual places to visit, actual hotels 
                to stay and actual restaurants to go to.
                
                This itinerary should cover all aspects of the trip, 
                from arrival to departure, integrating the city guide
                information with practical travel logistics.
                
                Your final answer MUST be a complete expanded travel plan,
                formatted as markdown, encompassing:
                - A daily schedule
                - Anticipated weather conditions
                - Recommended clothing and items to pack
                - Detailed budget breakdown
                - Specific reasons for each suggestion, highlighting 
                  what makes them special!
                {self.__tip_section()}

                Trip Date: {range}
                Traveling from: {origin}
                Traveler Interests: {interests}
            """),
            agent=agent,
            expected_output=dedent("""
                - **7-Day Itinerary**:
                  - **Day 1**:
                    - Morning: [Activity and Reason]
                    - Afternoon: [Activity and Reason]
                    - Evening: [Activity and Reason]
                    - Weather: [Conditions]
                    - Packing Suggestions: [Items]
                    - Budget Breakdown: [Details]
                  - **Day 2**:
                    ...
                  - **Day 7**:
                    ...
            """)
        )

    def __tip_section(self):
        return "If you do your BEST WORK, I'll tip you $100!"
