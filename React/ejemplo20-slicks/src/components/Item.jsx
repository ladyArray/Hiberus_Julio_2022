import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#ccc' }}>
        <h2> {this.props.texto} </h2>
        <img src={this.props.imagen} />
      </div>
    )
  }
}

export default Item