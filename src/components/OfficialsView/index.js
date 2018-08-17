import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import Facebook from '../../img/Facebook.png'
import Twitter from '../../img/Twitter.png'
import YouTube from '../../img/YouTube.png'
import {Card, CardMedia, CardText} from 'material-ui/Card'

import './index.css'

class OfficialsMockup extends Component {

  render() {
    return <OfficialsView photoUrl='www.' party='Foo' urls='foo' name='baz' channels=''/>

  }
}

class OfficialsView extends Component {

  render() {
    return (
      <Card className='OfficialViewContainer flex flex-col'>
        <CardMedia
          className='official-image'
          image={this.props.photoUrl}
        />
        <CardText>
          <h1>{this.props.name} - {this.props.party}</h1>

          <a href={this.props.urls}>{this.props.name}'s Website</a>
        </CardText>
      </Card>
    )
  }
}

export default OfficialsMockup