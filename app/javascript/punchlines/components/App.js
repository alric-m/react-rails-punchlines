import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PunchlinesDisplay from './PunchlinesDisplay'

const App = (props) => (
  <Router startingPunchlineId={props.startingPunchlineId}>
    <div>
      <Route
        path='/'
        startingPunchlineId={props.startingPunchlineId}
        render={(routeProps) =>
          <PunchlinesDisplay {...props} {...routeProps} />
        }
      />
    </div>
  </Router>
)

export default App
