import React from 'react';
import ReactDOM from 'react-dom';

class Link extends React.Component {
  render() {
    return (
      <a target='_blank' href={this.props.href}>{this.props.title}</a>)
  }
}

export default Link;
