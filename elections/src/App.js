import React, { Component } from 'react';
import './App.css';
import DivisionList from './DivisionList';

class App extends Component {
  state = {
    divisions: {},
    offices: [],
    officials: [],
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

  render() {
    return (
      <div className="App">
        <DivisionList
          divisions={this.state.divisions}
          offices={this.state.offices}
        />
      </div>
    );
  }
}

export default App;




// import React, { Component } from 'react';
// import './App.css';
//
// class App extends Component {
//   state = {
//     divisions: [],
//     offices: [],
//     officials: [],
//   }
//
//   componentDidMount() {
//     fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&address=colorado')
//       .then(rawRes => rawRes.json())
//       .then(res => {
//         console.log(res);
//         this.setState({
//         divisions: res.divisions,
//         offices: res.offices,
//         officials: res.officials,
//       })});
//   }
//
//   render() {
//     const { divisions } = this.state;
//     return (
//       <div className="App">
//         {/* {console.log(Object.entries(this.state.divisions))} */}
//         {Object.keys(divisions)
//           .map(key => <p>{divisions[key].name}</p>)}
//       </div>
//     );
//   }
// }
//
// export default App;
