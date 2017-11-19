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
        <div className='form-group'>
          <input 
            class='form-control'
            placeholder='go'
            type='text'
            ref='channel'
          />
        </div>
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
}

export default ChannelForm;
