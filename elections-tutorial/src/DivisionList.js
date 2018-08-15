import React, { Component } from 'react';

import OfficeList from './OfficeList';

const DivisionListItem = ({ divisionKey, division, handleSelectDivision }) => {
  return (
    <h3 onClick={() => handleSelectDivision(divisionKey)}>
      {division.name}
    </h3>
  )
}

class DivisionList extends Component {
  state = {
    selectedDivisionKey: null,
  }

  handleSelectDivision = (divisionKey) => {
    const nextKey = this.state.selectedDivisionKey === divisionKey
      ? null
      : divisionKey;

      this.setState({ selectedDivisionKey: nextKey });
  }

  render() {
    const {
      divisions,
      offices,
      officials,
      handleSelectOffice,
    } = this.props;

    return (
      <div>
        <h1>US Government Divisions</h1>
        {Object.keys(divisions).map(key =>
          <div key={key}>
            <DivisionListItem
              divisionKey={key}
              division={divisions[key]}
              handleSelectDivision={this.handleSelectDivision}
            />
            {this.state.selectedDivisionKey === key
              ? <OfficeList
                offices={offices}
                officeIndices={divisions[key].officeIndices}
                officials={officials}
                handleSelectOffice={handleSelectOffice}
              />
              : null
            }
          </div>
        )}
      </div>
    );
  }
}

export default DivisionList;
