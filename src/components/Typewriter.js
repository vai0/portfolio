import React from 'react';

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  clicketyClack(text, minTypeSpeed, maxTypeSpeed, initDelay) {
    let str = '';
    let typeSpeed = 0;
    const self = this;

    text.split('').forEach(c => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        str += c;
        this.setState({ text: str });
      }, initDelay + typeSpeed);
    });
  }

  componentDidMount() {
    this.clicketyClack(
      this.props.text,
      this.props.minTypeSpeed,
      this.props.maxTypeSpeed,
      this.props.initDelay
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.state.text}
        <span>&nbsp;</span>
      </div>
    );
  }
}

Typewriter.defaultProps = {
  text: 'Give me something to type!',
  minTypeSpeed: 50,
  maxTypeSpeed: 90,
  initDelay: 700,
};

export default Typewriter;
