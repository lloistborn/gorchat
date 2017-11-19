import React, { Component } from 'react';
import PropTypes from 'proptypes';

class ChannelForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    this.props.addChannel(channelName);

    node.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='row'>
          <div className="input-field">
            <input 
              className='validate'
              placeholder='New channel name'
              type='text'
              ref='channel'
            />
          </div>
        </div>
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
}

export default ChannelForm;
