import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { fn2 } from './util.js'

import '../style/index.less'

class ReactTest extends Component {
  render() {
    fn2()
    return (
      <div className="c-react-test">{this.props.text}</div>
    )
  }
}

ReactDOM.render(
  <ReactTest text="This is a text"></ReactTest>,
  document.querySelector('.container')
)
