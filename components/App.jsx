import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component {
  constructor(props) {
    super(props);
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
      <div className="col s12">
        <div className="content">
          <div className="row">
            <ChannelSection
              channels={this.state.channels}
              addChannel={this.addChannel.bind(this)}
              setChannel={this.setChannel.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
