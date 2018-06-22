import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Facebook from '../../img/Facebook.png'
import Twitter from '../../img/Twitter.png'
import YouTube from '../../img/YouTube.png'
import Button from 'material-ui/RaisedButton';
import axios from 'axios'

import './index.css'


let candidate;


class CandidateView extends Component{

  getCandidateId=()=>{
    /* eslint-disable */

    let id = window.location.search.substring(window.location.search.indexOf('=') + 1);
    /* eslint-enable */
    if(id){
      this.getCandidateInfo(id)
    }
    else{
      console.log('No id in url')
    }
  };

  getCandidateInfo=(id)=>{
    let candidate;
    axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&electionId=2000&address=colorado')
      .then((response)=>{
        candidate = response.data
      })
      .catch((e)=>{
        console.log(e)
      })
  };

  componentWillMount(){
    //this.getCandidateId();
  }

  render(){
    return(
      <div className='candidateViewContainer flex flex-col'>
        <h1>{this.props.candidate.name} - {this.props.candidate.party}</h1>
        <a href={this.props.candidate.candidateUrl}>{this.props.candidate.name}'s Website</a>
        <div className='socialMediaContainer flex jc-space-between'>
          {this.props.candidate.channels && this.props.candidate.channels.map((c)=> {
            let image;
            switch(c.type){
              case 'Facebook':
                image = Facebook;
                break;
              case 'Twitter':
                image = Twitter;
                break;
              case 'YouTube':
                image = YouTube;
                break;
              default:
                break;
            }
            return(
              <div key={c.type} className='socialMediaIcon'>
                <img onClick={()=>{window.location=c.id}} src={image}/>
              </div>
            )
          })}
        </div>
        <Button  className='candidateReturnButton' color='primary' onClick={()=>{this.props.history.push('/')}}>
          Return to List
        </Button>
      </div>
    )
  }
}

export default withRouter(CandidateView)