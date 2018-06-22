import React, {Component} from 'react';
import axios from 'axios';
import {List,ListItem} from 'material-ui/List';

class Candidates extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: [],
      open: false
    };
    this.handleNestedToggle = this.handleNestedToggle.bind(this);
  }

  componentWillMount(){
    axios.get(
      'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&electionId=2000&address=2010 14th st Boulder CO'
    )
      .then(res => {
        this.setState({data : res.data.contests});
      });
  }

  handleNestedToggle (item) {
    this.setState({
      open : item.state.open
    });
  }

  render(){
    const elections = this.state.data.map((contest, index) => {
      const candidates = [];
      for (let i in contest.candidates){

        candidates.push(<ListItem 
          key={contest.candidates[i].name}
          primaryText={contest.candidates[i].name}
        />);
      }

      return (
        <ListItem 
          key={index}
          primaryText={contest.office}
          open={this.state.open}
          onNestedListToggle={this.handleNestedToggle}
          nestedItems={candidates}
        />);
    });
    return (
      <div>
        <List>
          {elections}
        </List>
      </div>);
  }
}

export default Candidates;

