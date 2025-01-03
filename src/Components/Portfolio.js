import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-container py-5">
  <div className="container text-center">
    <div className="portfolio-title">
      <h2>
        My <span style={{ color: "blue" }}>Portfolio</span>
      </h2>
      <i>Here are some projects managed by me.</i>
    </div>
    <div className="row mt-4">
      <div className="col-md-6 mb-4">
        <div className="card">
          <img
            src="project/myswebsiteproject1.jpg"
            className="card-img-top"
            alt="Project 1"
          />
          <div className="card-body">
            <h5 className="card-title">College Project</h5>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card">
          <img
            src="project/myswebsiteproject2.jpg"
            className="card-img-top"
            alt="Project 2"
          />
          <div className="card-body">
            <h5 className="card-title">Educational Website</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Portfolio