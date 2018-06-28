import React, { Component } from 'react';
import swal from 'sweetalert2';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

export default class Alert extends Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick() {    
        swal('Any fool can use a computer')
    }

    componentDidMount(){
      M.Modal.init(this.sidenav);
    }
  
    render() {
      return (
        <div>
            <button onClick={this.handleClick.bind(this)}>Alert</button>
            
            <button data-target="modal1" class="btn modal-trigger">Modal</button>

          
          <div ref={ (sidenav) => {this.sidenav = sidenav} } id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
              <div class="row container">
                <div class="col s12">This div is 12-columns wide on all screen sizes</div>
                <div class="col s6">6-columns (one-half)</div>
                <div class="col s6">6-columns (one-half)</div>
              </div>
              <div class="row">
                <div class="col s12 m6 l3">
                  <div className="card">
                    <div className="card-image">
                      <img src={`${process.env.PUBLIC_URL}/images/color_1.png}`}/>
                      <img src={`${process.env.PUBLIC_URL}/images/111.png`}/>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/color_1.png}`}/>
                      </div>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/dragon_line1.png`}/>
                      </div>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/eye_1.png`}/>
                      </div>
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card.</p>
                    </div>
                    <div className="card-action">
                      <Link to="/Market/2">1</Link>
                    </div>
                </div>
                  </div>
                <div class="col s12 m6 l3"><div className="card">
                    <div className="card-image">
                      <img src={`${process.env.PUBLIC_URL}/images/color_1.png}`}/>
                      <img src={`${process.env.PUBLIC_URL}/images/111.png`}/>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/color_1.png}`}/>
                      </div>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/dragon_line1.png`}/>
                      </div>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/eye_1.png`}/>
                      </div>
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card.</p>
                    </div>
                    <div className="card-action">
                      <Link to="/Market/2">1</Link>
                    </div>
                </div>
                </div>
                <div class="col s12 m6 l3"><div className="card">
                    <div className="card-image">
                      <img src={`${process.env.PUBLIC_URL}/images/color_2.png}`}/>
                      <img src={`${process.env.PUBLIC_URL}/images/111.png`}/>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/color_2.png}`}/>
                      </div>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/dragon_line2.png`}/>
                      </div>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/eye_2.png`}/>
                      </div>
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card.</p>
                    </div>
                    <div className="card-action">
                      <Link to="/Market/2">2</Link>
                    </div>
                </div></div>
                <div class="col s12 m6 l3"><div className="card">
                    <div className="card-image">
                      <img src={`${process.env.PUBLIC_URL}/images/color_3.png}`}/>
                      <img src={`${process.env.PUBLIC_URL}/images/111.png`}/>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/color_3.png}`}/>
                      </div>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/dragon_line3.png`}/>
                      </div>
                      <div class="absolute">
                        <img src={`${process.env.PUBLIC_URL}/images/eye_3.png`}/>
                      </div>
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card.</p>
                    </div>
                    <div className="card-action">
                      <Link to="/Market/2">3</Link>
                    </div>
                </div></div>
              </div>
            </div>
            <div class="modal-footer">
              <Link to="/Manager"> Agree </Link>
            </div>
          </div>
        </div>
      )
    }
  }