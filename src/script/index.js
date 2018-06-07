import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { fn2 } from './util.js'

class ReactTest extends Component {
  render() {
    fn2()
    return (
      <div className="c-react-test">ReactTest-页面</div>
    )
  }
}

ReactDom.render(
  <ReactTest text="This is a text"></ReactTest>,
  document.querySelector('.container')
)
