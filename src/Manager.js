import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';

export default class Manager extends Component {
    constructor(props) {
      super(props)
      this.state = { random: 1, random2: 1, random3: 1 }
      this.handleClick = this.handleClick.bind(this)
      this.handleClick2 = this.handleClick2.bind(this)
    }
  
    handleClick() {
      // 조합배열 생성
      var a
      var b
      var c
      var count = 0
      var combArr = [];
      for(a=1; a<=3; a++){
        for(b=1; b<=3; b++){
          for(c=1; c<=3; c++){
            count++
            combArr[count] = [a,b,c]
            //console.log(CombArr[count])
          }
        }
      }

      // 랜덤조합배열 이미지생성, 다운로드
      var z = 1
      this.createImage = setInterval(() => {   
        this.setState({ random: combArr[z][0] })
        this.setState({ random2: combArr[z][1] })
        this.setState({ random3: combArr[z][2] })
        html2canvas(document.querySelector("#capture")).then(canvas => {
          //document.body.appendChild(canvas) 캔버스에 그리기
          //alert(canvas.toDataURL().toString()); 이미지를 문자열로 변환 후 알림창 띄우기
          var link = document.createElement('a');
          link.download = this.state.random+"_"+this.state.random2+"_"+this.state.random3+".png"; 
          link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
          link.click();
          z++
          if( z == 28 ){
            clearInterval(this.createImage)
          } 
      });
      }, 2000);       

    }

    handleClick2() {

    }
  
    render() {
      return (
        <div>
            <button onClick={this.handleClick.bind(this)}>이미지 생성 후 다운로드</button>
            {this.state.random}
            {this.state.random2}
            {this.state.random3}
            <button onClick={this.handleClick2.bind(this)}>일정시간마다 출시폴더로 이동</button>
            <div id='capture' class="div-overlap">
              <img class="overlap" src={require(`./image_source/color_${this.state.random}.png`)}/>
              <img class="overlap" src={require(`./image_source/dragon_line${this.state.random2}.png`)}/>
              <img class="overlap" src={require(`./image_source/eye_${this.state.random3}.png`)}/>
            </div>
        </div>
      )
    }
  }