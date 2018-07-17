import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Card, CardHeader, CardText } from 'material-ui/Card'

import { map } from 'lodash'
import { Avatar, Chip } from 'material-ui'

function OfficialItem ({ official, onClick }) {

  return (
      <Chip
        onClick={onClick}
        style={{
          padding: 3,
          marginRight: 3,
          chip: {
            margin: 4,
          },
          wrapper: {
            display: 'flex',
            flexWrap: 'wrap',
          },
        }}
      >
        <Avatar src={official.photoUrl} />
        {official.name}
      </Chip>

  );

}

function OfficeCard ({ office, officials, }) {
  return (
    <Card>
      <CardHeader
        key={office.name}
        title={office.name}
        subtitle={`level: ${office.levels ? office.levels.join(',') : 'N/A'}`}
        actAsExpander={true}
        showExpandableButton={true}
      />

      <CardText
        style={{display: 'flex'}}
        expandable={false}>
        {map(office.officialIndices, (i => {
          const official = officials[i];
          return (
            <OfficialItem
              key={i}
              official={official}
            />
          )
        }))}
      </CardText>
    </Card>)
}

export default class OfficialsContainer extends Component {

  render () {
    const props = this.props
    const { representatives } = props
    const { divisions, offices, officials } = representatives

    return (
      <div>
        <Tabs>
          {
            map(divisions, (division, key) => {
              return (
                <Tab
                  key={key}
                  label={division.name}
                >
                  {
                    division.officeIndices.map(i => {
                      return (
                        <OfficeCard
                          key={i}
                          office={offices[i]}
                          officials={officials}
                        />
                      )
                    })
                  }
                </Tab>

              )

            })
          }
        </Tabs>
      </div>
    )
  }

}