
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


const punchlines = document.querySelector('#punchlines')
ReactDOM.render(<App startingPunchlineId={punchlines.dataset.startingPunchlineId}/>, punchlines)
