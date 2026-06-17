import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'

export default function ResultsSection() {
  return (
    <div id="results" className="py-5 bg-white">
      <h1 className="text-center display-5 md:display-4 fw-bold text-foreground mb-5 leading-tight">
        Student <span className="text-accent">Results</span>
      </h1>
      <p className="fs-6 text-center mb-5">Motion results reflect the passion, hard work and efforts of our students, so far, we have acquired remarkable selection ratios in competitive exams.</p>
      <div className="d-flex gap-3 my-16 px-3">
        <div className="w-1/2">
          <Carousel data-bs-theme="dark">
            <CarouselItem>
              <img
                className="d-block w-11/12 d-d-flex justify-content-center"
                src="https://motion.ac.in/storage/website/result_image/1750049613224328.webp"
                alt="First slide"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                className="d-block w-11/12 d-d-flex justify-content-center"
                src="https://cdn.motion.ac.in/ssp/img/jee-adv-2025.png"
                alt="Second slide"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                className="d-block w-11/12 d-d-flex justify-content-center"
                src="https://cdn.motion.ac.in/ssp/img/home-page-img/JEE-2025-result-new.webp"
                alt="Third slide"
              />
            </CarouselItem>
          </Carousel>
        </div>
        <div className="w-1/2">
          <Carousel data-bs-theme="dark">
            <CarouselItem>
              <img
                className="d-block w-11/12 d-d-flex justify-content-center"
                src="https://cdn.motion.ac.in/ssp/img/home-page-img/JEE-2025-result-new.webp"
                alt="First slide"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                className="d-block w-11/12 d-d-flex justify-content-center"
                src="https://cdn.motion.ac.in/ssp/img/jee-adv-2025.png"
                alt="Second slide"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                className="d-block w-11/12 d-d-flex justify-content-center"
                src="https://motion.ac.in/storage/website/result_image/1750049613224328.webp"
                alt="Third slide"
              />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
