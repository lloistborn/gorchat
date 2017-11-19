import React, { Component } from 'react';
import PropTypes from 'proptypes';
import ChannelList from './ChannelList.jsx';
import ChannelForm from './ChannelForm.jsx';

class ChannelSection extends Component {
  render() {
    return (
      <div className='col 12'>
        <h4 className="header">Channels</h4>      
        <ChannelList {...this.props} />
        <ChannelForm {...this.props} />
      </div>
    );
  }
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setActiveChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default ChannelSection;
