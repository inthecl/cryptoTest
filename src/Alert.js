import React, { Component } from 'react';
import swal from 'sweetalert2';
import M from 'materialize-css';

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

          <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
          <div ref={ (sidenav) => {this.sidenav = sidenav} } id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
        </div>
      )
    }
  }