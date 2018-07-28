/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'

class Demo {
    static defaultProps = {
        title: 'This is a demo',
        value: 0
    }

    constructor(props) {
        super(props)

        const { title, value } = this.props
        this.state = {
            title,
            value
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title
        })
    }

    add = () => {
        this.setState({
            value: this.state.value++
        })
    }

    change = env => {
        this.setState({
            value: env.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <h1>this.state.title</h1>
                <div className="counter">this.state.value</div>
                <input
                    type="text"
                    value={this.state.value}
                    change={this.onChange}
                />
                <button onClick={this.add} />
            </div>
        )
    }
}
