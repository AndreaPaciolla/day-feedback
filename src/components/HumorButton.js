import React from 'react';

class HumorButton extends React.Component {

  constructor() {
    super();
    this.state = {
      humor: undefined
    };
  }

  update( e ) {
    console.debug(`Clicked`, e);
    this.setState({
      humor: e.target.value
    })
  }

  render() {
    let className = `humor-button humor-button__${this.props.humor}`;

    return (
      <div className="sensation">
        <button className={className} onClick={this.update.bind(this)}>
          {this.props.humor}
        </button>
      </div>
    );
  }

}

HumorButton.propTypes = {
  humor: React.PropTypes.string.isRequired,
  emoji: React.PropTypes.string
}

HumorButton.defaultProps = {
  emoji: "fine"
}

export default HumorButton;
