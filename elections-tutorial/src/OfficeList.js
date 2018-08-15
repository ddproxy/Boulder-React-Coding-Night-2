import React, { Component } from 'react';

const OfficeListItem = ({ office, officialIndices, handleSelectOffice }) => {
  return (
    <h4 onClick={() => handleSelectOffice(officialIndices)}>
      {office.name}
    </h4>
  )
}

class OfficeList extends Component {
  render() {
    const { offices, officeIndices, handleSelectOffice } = this.props;
    const officesForDivision = offices.filter((office, i) => officeIndices.includes(i));

    return (
      <div>
        {officesForDivision.map((office, i) =>
          <OfficeListItem
            key={office.name}
            office={office}
            officialIndices={office.officialIndices}
            handleSelectOffice={handleSelectOffice}
          />
        )}
      </div>
    )
  }
}

export default OfficeList;
