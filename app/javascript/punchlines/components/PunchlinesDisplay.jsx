import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import PunchlineText from './PunchlineText';
import PunchlineNavigation from './PunchlineNavigation';
import PunchlineFooter from './PunchlineFooter';

class PunchlinesDisplay extends React.Component {

  constructor () {
    super()
    this.state = {
      punchline: {},
      fireRedirect: false
    }
  }

  fetchPunchline (id) {
    axios.get(`api/punchlines/${id}`)
        .then(response => {
          this.setState({ punchline: response.data })
        })
        .catch(error => {
          console.error(error)
          this.setState({ fireRedirect: true })
        })
  }

  setPunchlineIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs)

    if (this.qsParams.punchline) {
      this.punchlineId = Number(this.qsParams.punchline)
    } else {
      this.punchlineId = this.props.startingPunchlineId
      this.props.history.push(`/?punchline=${this.punchlineId}`)
    }
  }

  componentDidMount () {
    this.setPunchlineIdFromQueryString(this.props.location.search)
    this.fetchPunchline(this.punchlineId)
  }

  componentWillReceiveProps (nextProps) {
    this.setPunchlineIdFromQueryString(nextProps.location.search)
    this.fetchPunchline(this.punchlineId)
  }

  render () {
    const punchline = this.state.punchline
    const nextPunchlineId = punchline.next_id
    const previousPunchlineId = punchline.previous_id

    return (
      <div>
        <div className='punchline-container'>
          {this.state.fireRedirect &&
          <Redirect to={'/'} />
            }
          {previousPunchlineId &&
          <PunchlineNavigation direction='previous' otherPunchlineId={previousPunchlineId} />
            }
          <PunchlineText punchline={this.state.punchline} />
          {nextPunchlineId &&
          <PunchlineNavigation direction='next' otherPunchlineId={nextPunchlineId} />
            }
        </div>
        {this.state.punchline.id !== parseInt(this.props.startingPunchlineId, 10) &&
        <PunchlineFooter startingPunchlineId={this.props.startingPunchlineId} />
          }
      </div>
    )
  }

}

export default PunchlinesDisplay
