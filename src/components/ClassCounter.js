import React, { Component } from 'react'

class ClassCounter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count: 9
  }
}
increament = ()=>{
  this.setState({
    count: this.state.count + 1
  })
}
  render() {
    return (
      <div>
        <button onClick={this.increament}>count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter