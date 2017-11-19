import React, { Component } from 'react';
import PropTypes from 'proptypes';

class Channel extends Component {
  onClick(e) {
    e.preventDefault();
    const { setActiveChannel, channel } = this.props;
    setActiveChannel(channel);
  }

  render() {
    const { channel, activeChannel } = this.props;
    const itemActive = channel === activeChannel ? 'collection-item active' : 'collection-item';
    
    return (
      <a href="#!" className={itemActive} onClick={this.onClick.bind(this)}>
        {channel.name}
      </a>
    );
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setActiveChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default Channel;