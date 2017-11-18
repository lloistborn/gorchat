import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Channel from './Channel.jsx';

class ChannelList extends Component {
  render() {
    return(
      <ul>{
        this.props.channels.map((channel) => {
          return <Channel
            channel={channel}
            key={channel.id}
            setChannel={this.props.setChannel}
          />
        })
      }</ul>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired
};

export default ChannelList;
