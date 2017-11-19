import React, { Component } from 'react';
import PropTypes from 'proptypes';

class Channel extends Component {
  onClick(e) {
    e.preventDefault();
    const { setChannel, channel } = this.props;
    setChannel(channel);
  }

  render() {
    const { channel } = this.props;

    return (
      <a href="#!" className="collection-item" onClick={this.onClick.bind(this)}>
        {channel.name}
      </a>
    );
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired
}

export default Channel;