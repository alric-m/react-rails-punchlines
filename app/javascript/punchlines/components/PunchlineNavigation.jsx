import React from 'react'
import { Link } from 'react-router-dom'

const PunchlineNavigation = (props) => {
  let element = null

  if (props.direction === 'previous') {
    element = (
      <Link className='link-previous' to={`/?punchline=${props.otherPunchlineId}`}>
        <i className='fa fa-angle-left' aria-hidden='true'><span /></i>
      </Link>
    )
  } else {
    element = (
      <Link className='link-next' to={`/?punchline=${props.otherPunchlineId}`}>
        <i className='fa fa-angle-right' aria-hidden='true'><span /></i>
      </Link>
    )
  }

  return element
}

export default PunchlineNavigation
