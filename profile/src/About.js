import React, { Component } from 'react';
import profile from './profile.jpg';
import './App.css';
class About extends Component {
  render() {
    return(
      <div>
        <div className="App-content App-content-red" >
          <div>
            <img src={profile} className="App-image" alt="profile" />
          </div>
          <div >
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <p>Hello, I am</p>
            <h1>
              NATTANICHA KERDSUPAP
            </h1>
            <p>ศึกษา...</p>

          </div>
        </div>

        <div className="App-content App-content-white" >
          <div>
            <h1>ABOUT MYSELF</h1>
            <p>....</p>
          </div>

          <div style={{width: '100vh'}}>
          <h2>TOOLS EXPERTNESS</h2>
            <div style={{paddingBottom:  '5%'}}>
              <p>Html/css</p>
              <div className="skillbar">
                <div className="skillbar-bar" style={{width: '50%'}}/>
              </div>
            </div>

            <div style={{paddingBottom:  '5%'}}>
              <p>React Native</p>
              <div className="skillbar">
                <div className="skillbar-bar" style={{width: '50%'}}/>
              </div>
            </div>

            <div style={{paddingBottom:  '5%'}}>
              <p>JS</p>
              <div className="skillbar">
                <div className="skillbar-bar" style={{width: '30%'}}/>
              </div>
            </div>

            <div style={{paddingBottom:  '5%'}}>
              <p>JS</p>
              <div className="skillbar">
                <div className="skillbar-bar" style={{width: '30%'}}/>
              </div>
            </div>

          </div>
        </div>

        <div className="App-content2 App-content-dark" >
          <div>
            <h1>ACTIVITY</h1>
          </div>

        </div>

        <div className="App-content App-content-red" >
          <div>
            <h1>Contract</h1>
          </div>
          <div >
            <p>Email: natchajang01@gmail.com</p>
            <p>Tel: 0859447147</p>
            <p></p>

          </div>
        </div>
      </div>
    )

  }
}

export default About;
