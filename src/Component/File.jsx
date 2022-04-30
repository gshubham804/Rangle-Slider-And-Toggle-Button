import React, { Component } from 'react'
import './File.css'
import {TiTick} from 'react-icons/ti'


export default class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgColor: "#53e274"
        }
      }
      boxClick = (e) => {
          if(this.state.bgColor==="#53e274")
          {
        this.setState({
          bgColor: "#d5e736"
        })
    }else{
        this.setState({
            bgColor: "#53e274"
          })
    }
      }
        
  render() {
    return (
      <>
       <div className="main-container" style={{backgroundColor: this.state.bgColor}}>
              <div className="second-cont">
              <div class="form-check form-switch theme-cont">
            <input onClick={this.boxClick}  class="form-check-input on-off bgtoggle" type="checkbox" id="switchDefault"/>
        </div>
                  <div className="second-cont-text">
                      <h2>
                          Simple, traffic-based pricing
                      </h2>
                      <p>
                          Sign-up for our 30-day trial. No credit card required
                      </p>
                  </div>
                  <div className="third-cont" style={{backgroundColor: this.state.bgColor}}>
                      <div className="third-cont-wrapper">
                      <div className="third-first-cont">
                          <div className="third-first-subfirst">
                              <p>100k PAGEVIEWS</p>
                          </div>
                          <div className="third-first-subsecond">
                              <h2>
                                  $16.00</h2><p>/month</p>
                          </div>
                      </div>
                      <div class="slidecontainer">
  <input className='slider-details' type="range" min="1" max="100"/>
</div>
                      <div className="third-second-cont">
            <p>Monthly Billing</p>
                          <div class="form-check form-switch on-off-cont">
            <input class="form-check-input on-off" type="checkbox" id="switchDefault"/>
        </div>
                          <p>Yearly Billing</p>
                          <p className='red-col'>25%discount</p>
                      </div>
                      <div className="third-third-cont">
                          <div className="third-first">
                              <div className="icon-text">
                              <TiTick  className='icon-name'/>
                              <p>unlimited websites</p>
                              </div>

                              <div className="icon-text">
                              <TiTick  className='icon-name'/>
                              <p>100% data ownership</p>
                              </div>

                              <div className="icon-text">
                              <TiTick  className='icon-name'/>
                              <p>Email reports</p>
                              </div>

                          </div>
                          <div className="third-second">
                          <button type="button" class="btn btn-dark start-free">Start my trial</button>
                          </div>
                      </div>
                  </div>
                  </div>
          </div>
      </div>
      </>
    )
  }
}
