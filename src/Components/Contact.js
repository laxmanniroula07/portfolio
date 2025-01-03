import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact-container py-5">
  <div className="container text-center">
    <div className="contact-title">
      <h2>Contact</h2>
      <i>Get in touch with me</i>
    </div>
    <div className="row justify-content-center mt-4">
      <div className="col-md-6">
        <form action="https://formspree.io/f/mdoqngjr" method="POST">
          <div className="form-group">
            <label htmlFor="name">
              <span className="required-star">*</span>Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <span className="required-star">*</span>Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <span className="required-star">*</span>Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={4}
              placeholder="Enter your message"
              required=""
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact