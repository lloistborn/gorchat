import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      channels: []
    }
  }

  setChannel(activeChannel) {
    this.setState({ activeChannel });

    // TODO: get channels message
  }

  addChannel(name) {
    const { channels } = this.state;
    channels.push({
      id: channels.length,
      name,
    });
    this.setState({ channels });

    // TODO: send to server
  }

  render() {
    return(
      <ChannelSection
        channels={this.state.channels}
        addChannel={this.addChannel.bind(this)}
        setChannel={this.setChannel.bind(this)}
      />
    );
  }
}

export default App;
