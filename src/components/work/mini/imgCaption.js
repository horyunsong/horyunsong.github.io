import React, { Component } from 'react';

class ImageCaption extends Component {
  static propTypes = {
    img: React.PropTypes.string,
    caption: React.PropTypes.string
  }

  static defaultProps = {
    img: "undefined"
  }


  render() {
    return (
      <div>
        <img src={this.props.img} />
        <p className="caption"><i>{this.props.caption}</i></p>
      </div>
    )
  }
}
export default ImageCaption;
