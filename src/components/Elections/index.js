import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import data from './sample.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const parseStateFromDivision = (ocdDivisionId) => {
  var state = ocdDivisionId.split('state:');
  state = state[1] ? state[1].slice(0, 2).toUpperCase() : "";
  return state
};

const Row = (props) => {
  const { name, electionDay, ocdDivisionId } = props;
  return (
    <TableRow>
      <TableRowColumn>{ <Link to="#">{name}</Link> }</TableRowColumn>
      <TableRowColumn>{ electionDay }</TableRowColumn>
      <TableRowColumn>{ parseStateFromDivision(ocdDivisionId) }</TableRowColumn>
    </TableRow>
  );
};

class Elections extends Component {

  renderElections(data) {
  	return data.elections.map(election => Row(election));
  }

  render() {
  	console.log(data);
    return (
      <div className="Elections">
        <Table>
			<TableHeader displaySelectAll={false}>
		      <TableRow>
		        <TableHeaderColumn>Name</TableHeaderColumn>
		        <TableHeaderColumn>Date</TableHeaderColumn>
		        <TableHeaderColumn>State</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
			<TableBody displayRowCheckbox={false}>
			  { this.renderElections(data) }
			</TableBody>
		</Table>
      </div>
    );
  }
}

export default Elections;