import React, { Component } from 'react';

class ForwardArrowMobile extends Component {
  render() {
    return (
      <div className='arrow' onClick={this.props.goToNextSlide}>
         <div className='arrowSpace'><h2 ><span>&gt;&gt;</span></h2></div>


      </div>
    );
  }
}

export default ForwardArrowMobile;
