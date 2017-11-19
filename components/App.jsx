import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import MessageSection from './messages/MessageSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {}
    }
  }

  setActiveChannel(activeChannel) {
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
            <div className='col s12 m4 l3'>
              <div className='content'>
                <div className='row'>
                  <ChannelSection
                    {...this.state}
                    addChannel={this.addChannel.bind(this)}
                    setActiveChannel={this.setActiveChannel.bind(this)}
                  />
                  <UserSection />            
                </div>
              </div>
            </div>
            <MessageSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
