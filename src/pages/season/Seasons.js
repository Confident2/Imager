import React from 'react'
import SeaonsDisplay from './SeasonsDisplay';
import SeasonSpinner from './SeasonSpinner';

class Seasons extends React.Component  {

  state = {lat: null, errorMessage:''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }
 // helper function - avoiding conditional in render methods
  
 ContentSect() {
    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error!: {this.state.errorMessage}</div>
      }
      if(this.state.lat && !this.state.errorMessage) {
        return <div><SeaonsDisplay lat={this.state.lat} /> </div>
      }
      
      return <SeasonSpinner message="Please accept location request"/>
  }

  render(){
    return (
        <div>
            {this.ContentSect()}
        </div>
    )
  }
}

export default Seasons 