import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="skills-container py-5">
  <div className="container">
    <div className="text-center">
      <h2>
        Skills &amp; <span>Ability</span>
      </h2>
    </div>
    <div className="row mt-5">
      <div className="col-md-4 mb-4">
        <div className="card icon-card text-center">
          <i
            className="fab fa-html5 card-img-top mt-3"
            style={{ color: "blue", fontSize: 48 }}
          />
          <div className="card-body">
            <p className="card-text">HTML</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card icon-card text-center">
          <i
            className="fab fa-css3-alt card-img-top mt-3"
            style={{ color: "blue", fontSize: 48 }}
          />
          <div className="card-body">
            <p className="card-text">CSS</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card icon-card text-center">
          <i
            className="fab fa-js card-img-top mt-3"
            style={{ color: "blue", fontSize: 48 }}
          />
          <div className="card-body">
            <p className="card-text">JavaScript</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card icon-card text-center">
          <i
            className="fab fa-github card-img-top mt-3"
            style={{ color: "blue", fontSize: 48 }}
          />
          <div className="card-body">
            <p className="card-text">GitHub</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card icon-card text-center">
          <i
            className="fab fa-python card-img-top mt-3"
            style={{ color: "blue", fontSize: 48 }}
          />
          <div className="card-body">
            <p className="card-text">Python Basic</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Skills