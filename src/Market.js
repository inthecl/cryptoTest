import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';

class Market extends Component {
  constructor(props) {
    super(props);
    this.exampleItems = _.range(1, 151).map(i => ({ id: i, name: `Item ${i}` }))
  }

  render() {
    const { pageNum } = this.props;
    console.log(pageNum)
    console.log(this.exampleItems)

    return (
      <div className='center'>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img src="https://www.google.co.kr/logos/doodles/2018/earth-day-2018-6526947692642304-s.png"></img>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img src="https://www.google.co.kr/logos/doodles/2018/earth-day-2018-6526947692642304-s.png"></img>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="pagination">
          <li className="disabled"><Link to="/Market/0"><i className="material-icons">chevron_left</i></Link></li>
          <li className="active"><Link to="/Market/1">1</Link></li>
          <li className="waves-effect"><Link to="/Market/2">2</Link></li>
          <li className="waves-effect"><Link to="/Market/3">3</Link></li>
          <li className="waves-effect"><Link to="/Market/4">4</Link></li>
          <li className="waves-effect"><Link to="/Market/5">5</Link></li>
          <li className="waves-effect"><Link to="/Market/6"><i className="material-icons">chevron_right</i></Link></li>
        </ul>
      </div>
    )
  }
}

export default Market;