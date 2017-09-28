import React from 'react'
import { Link } from 'react-router-dom'

const PunchlineFooter = (props) => (
  <div id='footer'>
    <Link className='btn btn-primary' to={`/?punchline=${props.startingPunchlineId}`}>
      Back to Beginning
    </Link>
  </div>
)

export default PunchlineFooter
