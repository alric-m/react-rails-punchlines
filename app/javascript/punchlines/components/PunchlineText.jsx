import React from 'react'

class PunchlineText extends React.Component {

  constructor(props) {
    super(props)
    this.formatPunchlineInfos  = this.formatPunchlineInfos.bind(this)
  }

  formatPunchlineInfos(punchline) {
    let punchlineInfos = punchline.author

    if (punchline.song) {
      punchlineInfos += " — " + punchline.song
    }

    if (punchline.album) {
      punchlineInfos += " (" + punchline.album + ")"
    }

    return punchlineInfos
  }

  render() {
    const punchline = this.props.punchline

    return (
      <div className='punchline'>
        <div className='punchline-open'>“</div>
        <div className='punchline-close'>”</div>
        <div className='punchline-text'>
          {punchline.text}
        </div>
        <div className='punchline-author'>
          <em>{this.formatPunchlineInfos(punchline)}</em>
        </div>
      </div>
    )
  }

}

export default PunchlineText
