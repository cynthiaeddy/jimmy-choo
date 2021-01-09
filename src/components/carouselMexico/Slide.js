import React from 'react';
import imageData from '../carouselMexico/Images'
import '../../stylesheets/AboutWF.css'


class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {landing: imageData};
  }
render() {
    return(
      <section>
      {
        this.state.landing.map((s, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'sliding'}
            key={index}>
            {s.img}
          </div>
        ) }
      </section>
    )
  }
}
export default Slide;


