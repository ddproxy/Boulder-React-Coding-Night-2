import React, { Component } from 'react';

const OfficialListItem = ({ official }) => {
  return (
    <div>
      <img src={official.photoUrl} style={{ maxHeight: '300px' }} alt={official.name} />
      <p>{official.name}</p>
      <p>{official.party}</p>
      <p>{official.phones}</p>
      {official.urls.map(url =>
        <a href={url}>{url}</a>
      )}
    </div>
  )
}

class OfficialList extends Component {
  render() {
    const { selectedOfficials } = this.props;

    return(
      <div className="OfficialList">
        {selectedOfficials.map(official =>
          <OfficialListItem
            key={official.name}
            official={official}
          />
        )}
      </div>
    )
  }
}

export default OfficialList;
