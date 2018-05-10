import React, { Component } from 'react';
import swal from 'sweetalert2';

export default class Alert extends Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick() {    
        swal('Any fool can use a computer')
    }
  
    render() {
      return (
        <div>
            <button onClick={this.handleClick.bind(this)}>Alert</button>
        </div>
      )
    }
  }