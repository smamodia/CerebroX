import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const NotFound = () => {
  useEffect(() => {
    const updateSizes = () => {
      const liElement = document.querySelector(".one");
      if (liElement) {
        const liWidth = liElement.offsetWidth + "px";
        document.querySelectorAll("li").forEach((li) => {
          if (li) {
            li.style.height = liWidth;
            li.style.lineHeight = liWidth;
          }
        });
      }

      const wordsearchElement = document.getElementById("wordsearch");
      if (wordsearchElement) {
        const totalHeight = wordsearchElement.offsetWidth + "px";
        wordsearchElement.style.height = totalHeight;
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  useEffect(() => {
    const elements = [
      "one", "two", "three", "four", "five", "six", "seven",
      "eight", "nine", "ten", "eleven", "twelve", "thirteen",
      "fourteen", "fifteen"
    ];

    elements.forEach((cls, index) => {
      setTimeout(() => {
        const element = document.querySelector(`.${cls}`);
        if (element) {
          element.classList.add("selected");
        }
      }, 1500 + index * 500);
    });
  }, []);

  return (
    <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center position-relative">
      <video
        autoPlay
        muted
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: -1 }}
      >
        <source src="/404.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container position-relative text-center">
        <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
          <span className="display-1 fw-bold one">4</span>
          <i className="bi bi-exclamation-circle-fill text-danger display-4"></i>
          <span className="display-1 fw-bold three">4</span>
        </h2>
        <h3 className="h2 mb-2">Oops! You're lost.</h3>
        <p className="mb-5">The page you are looking for was not found.</p>
        <a className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" href="/">
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;
