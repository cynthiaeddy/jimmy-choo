import React, { Component } from 'react';

class BackArrowMobile extends Component {
  render() {
    return (
      <div className='arrow'  onClick={this.props.goToPrevSlide}>
          <div className='arrowSpace backArrow'><h2 ><span>&lt;&lt; </span></h2></div>
        </div>

    )
  }
}

export default BackArrowMobile;
