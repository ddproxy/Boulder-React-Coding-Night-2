import React, { Component } from 'react';
import './App.css';
import DivisionList from './DivisionList';
import OfficialList from './OfficialList';

class App extends Component {
  state = {
    divisions: {},
    offices: [],
    officials: [],
    selectedOfficials: [],
  };

  componentDidMount() {
    fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&address=colorado')
      .then(stream => stream.json())
      .then(res => this.setState({
        divisions: res.divisions,
        offices: res.offices,
        officials: res.officials,
      }, () => console.log(this.state)));
  }

  handleSelectOffice = (officialIndices) => {
    const selectedOfficials = this.state.officials.filter((official, i) => officialIndices.includes(i));

    this.setState({ selectedOfficials });
  }

  render() {
    return (
      <div className="App">
        <DivisionList
          divisions={this.state.divisions}
          offices={this.state.offices}
          officials={this.state.officials}
          handleSelectOffice={this.handleSelectOffice}
        />
        <OfficialList
          selectedOfficials={this.state.selectedOfficials}
        />
      </div>
    );
  }
}

export default App;
