import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class Resume extends Component {
  render() {

    if (this.props.data) {

      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3 style={{ "margin": "0 0 12px" }}>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p style={{ "font-size": "15px", "color": "#838c95", "margin": "0 0 30px" }}>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3 style={{ "margin": "0 0 12px" }}>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p style={{ "font-size": "15px", "color": "#838c95", "margin": "0 0 30px" }}>{work.description}</p>
        </div>
      })
      var work2 = this.props.data.work2.map(function (work2) {
        return <div key={work2.company}><h3 style={{ "margin": "0 0 12px" }}>{work2.company}</h3>
          <p className="info">{work2.title}<span>&bull;</span> <em className="date">{work2.years}</em></p>
          <p style={{ "font-size": "15px", "color": "#838c95", "margin": "0 0 30px" }}>{work2.description}</p>
        </div>
      })
      var work3 = this.props.data.work3.map(function (work3) {
        return <div key={work3.company}><h3 style={{ "margin": "0 0 12px" }}>{work3.company}</h3>
          <p className="info">{work3.title}<span>&bull;</span> <em className="date">{work3.years}</em></p>
          <p style={{ "font-size": "15px", "color": "#838c95", "margin": "0 0 30px" }}>{work3.description}</p>
        </div>
      })
      var work4 = this.props.data.work4.map(function (work4) {
        return <div key={work4.company}><h3 style={{ "margin": "0 0 12px" }}>{work4.company}</h3>
          <p className="info">{work4.title}<span>&bull;</span> <em className="date">{work4.years}</em></p>
          <p style={{ "font-size": "15px", "color": "#838c95", "margin": "0 0 30px" }}>{work4.description}</p>
        </div>
      })
      var work5 = this.props.data.work5.map(function (work5) {
        return <div key={work5.company}><h3 style={{ "margin": "0 0 12px" }}>{work5.company}</h3>
          <p className="info">{work5.title}<span>&bull;</span> <em className="date">{work5.years}</em></p>
          <p style={{ "font-size": "15px", "color": "#838c95", "margin": "0 0 30px" }}>{work5.description}</p>
        </div>
      })

    }

    return (
      <section id="resume">

        <div className="row education" style={{ "margin": "0 auto", "font-family": "opensans-regular, sans-serif" }}>
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item" >
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work" style={{ "margin": "0 auto", "font-family": "opensans-regular, sans-serif" }}>

          <div className="three columns header-col">
            <h1><span>Courses</span></h1>
          </div>

          <div className="nine columns main-col">
            <div>
              <Button color="dark" id="toggler" style={{ marginBottom: '0.5rem', marginTop: "3rem", fontSize: "15px", padding: "5px 20px" }}>
                Year 1
            </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    {work}
                  </CardBody>
                </Card>
              </UncontrolledCollapse>

            </div>

            <div>
              <Button color="dark" id="toggler2" style={{ marginBottom: '0.5rem', marginTop: "0.5rem", fontSize: "15px", padding: "5px 20px" }}>
                Year 2
            </Button>
              <UncontrolledCollapse toggler="#toggler2">
                <Card>
                  <CardBody>
                    {work2}
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            <div>
              <Button color="dark" id="toggler3" style={{ marginBottom: '0.5rem', marginTop: '0.5rem', fontSize: "15px", padding: "5px 20px" }}>
                Year 3
            </Button>
              <UncontrolledCollapse toggler="#toggler3">
                <Card>
                  <CardBody>
                    {work3}
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            <div>
              <Button color="dark" id="toggler4" style={{ marginBottom: '0.5rem', marginTop: '0.5rem', fontSize: "15px", padding: "5px 20px" }}>
                Year 4
            </Button>
              <UncontrolledCollapse toggler="#toggler4">
                <Card>
                  <CardBody>
                    {work4}
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            <div>
              <Button color="dark" id="toggler5" style={{ marginBottom: '0.5rem', marginTop: '0.5rem', fontSize: "15px", padding: "5px 20px" }}>
                Year 5
            </Button>
              <UncontrolledCollapse toggler="#toggler5">
                <Card>
                  <CardBody>
                    {work5}
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>

          </div>
        </div>

      </section >
    );
  }
}

export default Resume;