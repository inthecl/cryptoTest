import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';
import imgTestPet from './img_test_pet.png';

class Market extends Component {
  constructor(props) {
    super(props);
    this.exampleItems = _.range(1, 151).map(i => ({ id: i, name: `Item ${i}` }))
  }


  drawPagenation(pagenum) {
    return
    (
      <ul className="pagination">
        <li className="disabled"><Link to={"/Market/"+String(pagenum)}><i className="material-icons">chevron_left</i></Link></li>
        <li className="active"><Link to={"/Market/"+String(pagenum)}>{pagenum}</Link></li>
        <li className="waves-effect"><Link to={"/Market/"+String(parseInt(pagenum)+1)}>{parseInt(pagenum)+1}</Link></li>
        <li className="waves-effect"><Link to={"/Market/"+String(parseInt(pagenum)+2)}>{parseInt(pagenum)+2}</Link></li>
        <li className="waves-effect"><Link to={"/Market/"+String(parseInt(pagenum)+3)}>{parseInt(pagenum)+3}</Link></li>
        <li className="waves-effect"><Link to={"/Market/"+String(parseInt(pagenum)+4)}>{parseInt(pagenum)+4}</Link></li>
        <li className="waves-effect"><Link to={"/Market/"+String(parseInt(pagenum)+5)}><i className="material-icons">chevron_right</i></Link></li>
      </ul>
    )
  }

  render() {
    const { pagenum } = this.props.match.params;
    const lastItem = this.exampleItems.length
    const lastPage = lastItem/12;
    console.log(lastPage)
    const startItem = (pagenum-1)*12
    let endItem = pagenum*12

    if(endItem > lastItem) endItem = lastItem
    const pages = this.exampleItems.slice(startItem, endItem)

    return (
      <div className='center'>
        <div className="row">
          {pages.map(item =>
            <div key={item.id}>
              <div className="col s12 m6 l3">
                <div className="card">
                  <div className="card-image">
                    <img src={imgTestPet}/>
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

        <ul className="pagination">
          <li className="disabled"><Link to={"/Market/"+String(pagenum)}><i className="material-icons">chevron_left</i></Link></li>
          {[1,2,3,4,5].map(i =>
              (parseInt(pagenum) + i - 1)   < lastPage ? <li className="waves-effect"><Link to={"/Market/"+String(parseInt(pagenum)+i)}>{parseInt(pagenum)+i}</Link></li> : <li/>
          )}
          <li className="waves-effect"><Link to={"/Market/"+String(parseInt(pagenum)+5)}><i className="material-icons">chevron_right</i></Link></li>
        </ul>
      </div>
    )
  }
}

export default Market;