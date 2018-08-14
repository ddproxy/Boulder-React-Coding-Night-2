import React, { Component } from 'react';

import OfficeList from './OfficeList';

const DivisionListItem = ({ divisionKey, division, handleSelect }) => {
  return (
    <p onClick={() => handleSelect(divisionKey)}>
      {division.name}
    </p>
  )
}

class DivisionList extends Component {
  state = {
    selectedDivisionKey: null,
  }

  handleSelect = (divisionKey) => {
    const nextKey = this.state.selectedDivisionKey === divisionKey
      ? null
      : divisionKey;
      this.setState({ selectedDivisionKey: nextKey });
  }

  render() {
    const { divisions } = this.props;

    return (
      <div className="container">
        <h3>Divisions</h3>
        {Object.keys(divisions).map(key =>
          <div key={key}>
            <DivisionListItem
              divisionKey={key}
              division={divisions[key]}
              handleSelect={this.handleSelect}
            />
            {this.state.selectedDivisionKey === key
              ? <OfficeList />
              : null
            }
          </div>
        )}
      </div>
    );
  }
}

export default DivisionList;


// import React, { Component } from 'react';
//
// import OfficeList from './OfficeList';
//
// const DivisionListItem = ({ divisionKey, division, handleSelect }) => {
//   return (
//     <p onClick={() => handleSelect(divisionKey)}>
//       {division.name}
//     </p>
//   )
// }
//
// class DivisionList extends Component {
//   state = {
//     selectedDivisionKey: null,
//   }
//
//   handleSelect = (divisionKey) => {
//     const nextKey = this.state.selectedDivisionKey === divisionKey
//       ? null
//       : divisionKey;
//     this.setState({ selectedDivisionKey: nextKey })
//   }
//
//   render() {
//     const { divisions, offices } = this.props;
//
//     return (
//       <div className="container">
//         <h3>Divisions</h3>
//         {Object.keys(divisions).map(key =>
//           <div key={key}>
//             <DivisionListItem
//               divisionKey={key}
//               division={divisions[key]}
//               handleSelect={this.handleSelect}
//             />
//             {this.state.selectedDivisionKey === key
//               ? <OfficeList
//                 offices={offices}
//                 officeIndices={divisions[key].officeIndices}
//               />
//               : null
//             }
//           </div>
//         )}
//       </div>
//     );
//   }
// }
//
// export default DivisionList;
