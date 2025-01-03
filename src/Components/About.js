import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-me-container py-5">
  <div className="container">
    <div className="text-center">
      <h2>
        About <span>Me</span>
      </h2>
    </div>
    <div className="row align-items-center mt-4">
      <div className="col-md-6">
        <div className="image animate-from-left">
          <img
            className="img-fluid"
            draggable="false"
            src="photos/img.jpg"
            alt="About Me Image"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="about-me-text">
          <h3>I'm Laxman</h3>
          <h4>
            <i>Bachelor In Computer System Engineering</i>
          </h4>
          <p>
            Hi, I'm currently pursuing a BSc in Computer Systems Engineering,
            specializing in Website Design, Database Management, Networking, and
            cyber security. I'm passionate about creating user-friendly web
            experiences and optimizing data systems to improve efficiency and
            performance. Let's connect and explore new possibilities together!
          </p>
          <p>
            <img
              style={{ width: 30 }}
              src="photos/imageslogo/icons8-email-48.png"
              alt=""
            />{" "}
            Email: laxmanniroula314@gmail.com
          </p>
          <p>
            <img
              style={{ width: 30 }}
              src="photos/imageslogo/icons8-address-50.png"
              alt=""
            />{" "}
            Place: Biratnagar, Nepal
          </p>
          <button id="skillsButton" className="btn btn-primary mt-3">
            Skills &amp; Ability
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About