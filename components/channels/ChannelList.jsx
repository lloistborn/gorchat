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
              {...this.props}
            />
          })
        }
        </div>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setActiveChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default ChannelList;
