import React, { Component } from 'react';

class OfficeList extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default OfficeList;


// import React, { Component } from 'react';
//
// const OfficeListItem = ({ office, handleSelect }) => {
//   return (
//     <p onClick={() => handleSelect(office.name)}>
//       {office.name}
//     </p>
//   )
// }
//
// class OfficeList extends Component {
//   handleSelect = (officeName) => {
//     console.log(officeName);
//   }
//
//   render() {
//     const { offices, officeIndices } = this.props;
//     const officesForDivision = offices.filter((office, i) => officeIndices.includes(i));
//     console.log(officesForDivision);
//
//     return (
//       <div>
//         {officesForDivision.map(office =>
//           <OfficeListItem
//             key={office.name}
//             office={office}
//             handleSelect={this.handleSelect}
//           />
//         )}
//       </div>
//     )
//   }
// }
//
// export default OfficeList;
