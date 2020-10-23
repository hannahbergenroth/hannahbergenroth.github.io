import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import tabledoc from '../main.pdf';
import tableposter from '../TableCity_Poster.pdf'
import imagedoc from '../Bildteknik.pdf'
import { Button } from 'reactstrap';
import ReactPlayer from "react-player"

import table from "./img/tablecity.jpg"
import webb from "./img/bild.png"
import unity from "./img/unity.jpg"
import t1 from "./img/table1.jpg"
import t2 from "./img/table2.png"
import t3 from "./img/table3.png"
import t4 from "./img/table4.png"
import t5 from "./img/table5.png"
import b from "./img/b.JPG"
import a from "./img/a.JPG"
import c from "./img/c.jpg"
import bildserie from "/Users/hannahbergenroth/Desktop/portfolio/my-app/src/Components/bildserie.png"
import qatch from "./img/qatch.png"

function TableCity(props) {
  return (<Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Advanced Practical Course - Augmented Reality Applications (TUM)
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>UNITY - C# - BLENDER </p>
      <h3>Table City</h3>
      <p style={{ "font-size": "15px" }}>
        In this lab course, we created a city simulation game in augmented reality. As such, the gameplay is inspired by earlier games in the genre, like SimCity. Such a city simulation is composed by multiple game elements, like building roads or buildings, managing resources and planing complex infrastructure. By using the HTC VIVE Pro and multi-marker tracking, the city is projected onto a table. Object persistence is achieved with a combination of multi-marker tracking and the base stations of HTC VIVE Pro.
        </p>
      <p style={{ "font-size": "15px" }}>
        <b>Goal of the project</b><br></br>
        The goal of the project was to create a game in augmented reality. Furthermore, this game is supposed to be a building simulator placed in a modern setting with appropriate buildings and roads. Those are supposed to be arranged on a grid based system. Additionally, its gamespace has to be defined by one or more user placed markers which are tracked by the game.</p>
      <p style={{ "font-size": "15px" }}><b>Lab Course Requirements</b><br></br><b>Tracking-</b> TableCity uses its own multi-marker tracking with the help of OpenCV and combines it with the VIVE's tracking to get the best results.<br></br>
        <b>Visualization-</b> By using Unity3D we visualize the gameplay with custom assets.<br></br>
        <b>Logic</b>- The game uses carefully crafted game rules which are further explained in the documentation.</p>
      <h4>Demonstration Video</h4>
      <ReactPlayer style={{ margin: "0 auto", marginBottom: "10px" }}
        url={"https://www.youtube.com/watch?v=uaaO6TNzBww&feature=emb_logo&ab_channel=SeongjinBien"}
      />
      <img alt={"table"} src={table} style={{ "width": "100%", marginBottom: "10px" }} />
      <img alt={"table"} src={t4} style={{ "width": "46%", marginBottom: "10px" }} />
      <img alt={"table"} src={t2} style={{ "width": "54%", marginBottom: "10px" }} />
      <img alt={"table"} src={t5} style={{ "width": "100%", marginBottom: "10px" }} />
      <img alt={"table"} src={a} style={{ "width": "50%", marginBottom: "10px" }} />
      <img alt={"table"} src={b} style={{ "width": "50%", marginBottom: "10px" }} />

      <a class="linken" href={tabledoc} style={{ "font-size": "14px", "padding": "0 15px 0 0" }} target="_blank">Documentation</a>
      <a class="linken" href={tableposter} style={{ "font-size": "14px", "padding": "0 15px 0 0" }} target="_blank">Poster</a>
      <a class="linken" href={"https://github.com/tenfoldpaper/TableCity_AR"} style={{ "font-size": "14px" }} target="_blank">Link to GitHub repository</a>
    </Modal.Body>
    <Modal.Footer>

      <Button color="dark" style={{ "font-size": "15px" }} onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
}

function Awebb(props) {
  return (<Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        TDDD27 - Advanced Webprogramming
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>MERN-STACK - REDUX</p>
      <h3>Webshop</h3>
      <p style={{ "font-size": "15px" }}>
        A webshop developed with the MERN stack and Redux for state management. Cloudinary is used for storing the images in the project.
        </p><p style={{ "font-size": "15px" }}>
        In the application it is possible to
       
          <li  style={{ "margin": "0" }}>create products (for logged in users)</li>
          <li style={{ "margin": "0" }}>show proudcts</li>
          <li style={{ "margin": "0" }}>register users</li>
          <li style={{ "margin": "0" }}>log in/out (access of protected pages is only accessible to logged in users)</li>
          <li style={{ "margin": "0" }}>add products to shopping cart</li>
      
      </p>
      <h4>Project screencast</h4>
      <ReactPlayer style={{ margin: "0 auto", marginBottom: "10px" }}
        url={"https://www.youtube.com/watch?v=CpGbj2rv2j0&feature=youtu.be&ab_channel=HannahBergenroth"}
      />
      <ReactPlayer style={{ margin: "0 auto", marginBottom: "10px" }}
        url={"https://www.youtube.com/watch?v=UALph3G-0kA&feature=youtu.be&ab_channel=HannahBergenroth"}
      />
      <a class="linken" href={"https://github.com/hannahbergenroth/Webshop"} style={{ "font-size": "14px" }} target="_blank">Link to GitHub repository</a>
    </Modal.Body>
    <Modal.Footer>
      <Button color="dark" style={{ "font-size": "15px" }} onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
}

function TableCityApp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="columns portfolio-item" onClick={() => setModalShow(true)}>
        <div className="item-wrap">
          <img alt={"table"} src={table} style={{border: "5px solid white", height: "200px", marginLeft: "auto", marginRight: "auto", display: "block"}}/>
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{"Table City"}</h5>
              <p>{"An augmented reality city-building simulation game, developed for the HTC VIVE Pro on Unity."}</p>
            </div>
          </div>
        </div>
      </div>
      <TableCity
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function AWebbApp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="columns portfolio-item" onClick={() => setModalShow(true)}>
        <div className="item-wrap">
          <img alt={"jjh"} src={webb} style={{border: "5px solid white", height: "200px", marginLeft: "auto", marginRight: "auto", display: "block"}}/>
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{"Webshop"}</h5>
              <p>{"Webshop built with MERN Stack and Redux for state management."}</p>
            </div>
          </div>
        </div>
      </div>
      <Awebb
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function Focus(props) {
  return (<Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        TNM089 - Imaging Technology
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>MATLAB</p>
      <h3>Al-In-Focus-Image</h3>
      <p style={{ "font-size": "15px" }}>
        A method for creating a completely focused image from an image stack, is introduced in the project. It combines images taken at different focus distances to give an output image that results in a greater depth of field (DOF) than any of the individual images. The algorithm uses Sum-Modified-Laplacian as focus measure, which is used to obtain
a respective weight for each pixel. A Laplacian
pyramid is created for each image in the image stack and a Gaussian
pyramid is created for the corresponding weight map for each image. The images are then
combined by image fusion and the fused image is then obtained by a inverse Laplacian pyramid
transform. 
        </p>
        <img alt={"table"} src={bildserie} style={{ "width": "100%", marginBottom: "10px" }} />
      <a class="linken" href={imagedoc} style={{ "font-size": "14px", "padding": "0 15px 0 0" }} target="_blank">Project report</a>
      <a class="linken" href={"https://github.com/hannahbergenroth/All-in-focus-image"} style={{ "font-size": "14px" }} target="_blank">Link to GitHub repository</a>
    </Modal.Body>
    <Modal.Footer>
      <Button color="dark" style={{ "font-size": "15px" }} onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
}

function FocusApp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="columns portfolio-item" onClick={() => setModalShow(true)}>
        <div className="item-wrap" >
          <img alt={"jjh"} src={bildserie} style={{border: "5px solid white",  height: "200px", marginLeft: "auto", marginRight: "auto", display: "block",}}/>
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{"All-In-Focus-Image"}</h5>
              <p>{"Multi-focus image fusion with Laplacian pyramid transform."}</p>
            </div>
          </div>
        </div>
      </div>
      <Focus
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function AI(props) {
  return (<Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        TNM095 - Artificial Intelligence for Interactive Media
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Python - Pygame</p>
      <h3>Catch The Quince</h3>
      <p style={{ "font-size": "15px" }}>
        Simple ball catcher game in Python using Reinforcment Learning and Q-learning.
      </p>
      <a class="linken" style={{ "color": "#313131", "font-size": "14px", "padding": "0 15px 0 0" }} target="_blank">Project report (coming soon)</a>
      <a class="linken" href={"https://github.com/hannahbergenroth/CatchTheQuince"} style={{ "font-size": "14px" }} target="_blank">Link to GitHub repository</a>
    </Modal.Body>
    <Modal.Footer>
      <Button color="dark" style={{ "font-size": "15px" }} onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
}

function AIApp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="columns portfolio-item" onClick={() => setModalShow(true)}>
        <div className="item-wrap" >
          <img alt={"jjh"} src={qatch} style={{border: "5px solid white",  marginLeft: "auto", marginRight: "auto", display: "block", height: "200px"}}/>
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{"Catch The Quince"}</h5>
              <p>{"Ball catcher game developed in Python using Q-learning."}</p>
            </div>
          </div>
        </div>
      </div>
      <AI
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      })
    }



    return (
      <section id="portfolio">

        <div className="row" style={{ "margin": "0 auto" }}>

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Projects.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" style={{ "cursor": "pointer" }}>
              <TableCityApp />
              <AWebbApp />
              <FocusApp />
              <AIApp />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;