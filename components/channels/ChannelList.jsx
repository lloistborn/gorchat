import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Channel from './Channel.jsx';

class ChannelList extends Component {
  render() {
    return(
      <div className="collection">
        {
          this.props.channels.map((channel) => {
            return <Channel
              channel={channel}
              key={channel.id}
              setChannel={this.props.setChannel}
            />
          })
        }
        </div>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired
};

export default ChannelList;
