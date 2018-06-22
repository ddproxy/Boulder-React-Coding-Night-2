import React, { Component } from 'react'
import axios from 'axios'

import './index.css'
import OfficialsContainer from './OfficialsContainer'
import Loader from './Loader'

class Home extends Component {

  state = {
    address: null,
    party: null,
    representatives: null,
    fetching: false
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.fetchrepresentatives(this.props.address)
  }

  fetchrepresentatives (address = 'colorado') {
    this.setState({address, fetching: true})
    const endpoint = `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&address=${address}`
    return axios(endpoint)
      .then(res => {
        this.setState({
          representatives: res.data,
          fetching: false
        })
      })
  }

  updateAddress = (address) => {
    if (!address || !address.length) return
    this.fetchrepresentatives(address);
  }

  render () {
    const {address, party, fetching, representatives,} = this.state;

    return (
      <div className="Home">
        <div>
          {/* theirs */}
          {address}
        </div>
        {
          fetching
            ? (<Loader/>)
            : (
              <OfficialsContainer
                party={party}
                representatives={representatives}
              />
            )
        }
      </div>
    )
  }
}

export default Home
