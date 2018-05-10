import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import _ from 'underscore';
import imgTestPet from './img_test_pet.png';

class Market extends Component {
  constructor(props) {
    super(props);

    // 조합배열 생성
    var a
    var b
    var c
    var count = 0
    var combArr = [];
    for(a=1; a<=3; a++){
      for(b=1; b<=3; b++){
        for(c=1; c<=3; c++){
          combArr[count] = [a,b,c]
          //console.log("combArr = "+combArr[count])
          count++
        }
      }
    }
    // 중복없는 난수배열 생성
    var x
    var y
    var randomArr = []
    for(x=0; x<=26; x++){
      randomArr[x] = Math.floor(Math.random() * 27)
      for(y=0; y<x; y++){
        if(randomArr[x]==randomArr[y]) x--;
      }
      //console.log("randomArr = "+randomArr[x])
    }

    this.exampleItems = _.range(1, 151).map(i => ({ id: i, name: `Item ${i}`, comb0: combArr[randomArr[i%26]][0],
    comb1: combArr[randomArr[i%26]][1], comb2: combArr[randomArr[i%26]][2] }))// 예시 a[81] = { 1111~3333 } -> a[i%81]
  }

  drawPagenation(pagenum, lastPage) {
    let targetPages = []
    for(let i = -1; i < 6; i++) {
      targetPages.push(parseInt(pagenum) + i)
    }
    targetPages = targetPages.filter((num) => num < lastPage+2)
    console.log(targetPages)
    let first = targetPages[0]
    let len = 7 - targetPages.length;
    for(let i = 0; i < len; i++) {
      targetPages.unshift(first-(i+1))
    }
    console.log(targetPages)
    let idx = 0;
    let activePage = 0;
    const listItems = targetPages.map((num) => {
        idx = idx + 1
        if(num == 0) {
          return <li className="disabled"><Link to={"/Market/"+String(num)}><i className="material-icons">chevron_left</i></Link></li>
        }
        if(idx == 1) {
          return <li className="waves-effect"><Link to={"/Market/"+String(parseInt(pagenum)-1)}><i className="material-icons">chevron_left</i></Link></li>
        }
        if(pagenum == num) {
          activePage = num;
          return <li className="active"><Link to={"/Market/"+String(num)}>{num}</Link></li>
        }
        if(activePage + 1 > lastPage+1 && idx == targetPages.length) {
          return <li className="disabled"><Link to={"/Market/"+String(activePage)}><i className="material-icons">chevron_right</i></Link></li>
        }
        if(idx == targetPages.length) {
          return <li className="waves-effect"><Link to={"/Market/"+String(parseInt(activePage)+1)}><i className="material-icons">chevron_right</i></Link></li>
        }
        return <li className="waves-effect"><Link to={"/Market/"+String(num)}>{num}</Link></li>
      }
    );
    return (
      <ul class="pagination">{listItems}</ul>
    );
  }

  render() {
    const { pagenum } = this.props.match.params;
    const lastItem = this.exampleItems.length
    const lastPage = lastItem/12;
    console.log(lastPage)
    const startItem = (pagenum-1)*12
    let endItem = pagenum*12
    if(pagenum < 1) return <Redirect to="/Market/1"/>
    if(pagenum > lastPage + 1) return <Redirect to="/Market/1"/>

    if(endItem > lastItem) endItem = lastItem
    const pages = this.exampleItems.slice(startItem, endItem)
    const names = [ '111.png', '112.png', '113.png']
    let imgIdx = 0;

    return (
      <div className='center'>
        <div className="row">
          {pages.map(item =>
            <div key={item.id}>
              <div className="col s12 m6 l3">
                <div className="card">
                  <div className="card-image">
                    <img src={`${process.env.PUBLIC_URL}/images/${names[item.id % 3]}`}/>
                    <div class="absolute">
                      <img  src={require(`./image_source/color_${item.comb0}.png`)}/>
                    </div>
                    <div class="absolute">
                      <img  src={require(`./image_source/dragon_line${item.comb1}.png`)}/>
                    </div>
                    <div class="absolute">
                      <img  src={require(`./image_source/eye_${item.comb2}.png`)}/>
                    </div>
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <Link to="/Market/2">{item.name}</Link>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {this.drawPagenation(pagenum,lastPage)}
      </div>
    )
  }
}

export default Market;