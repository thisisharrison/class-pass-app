import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ClassIndexItem from './class_index_item';

class ClassIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    }
  }

  componentWillMount() {
    this.props.fetchClasses();
  }

  componentWillReceiveProps(newState) {
    debugger
    this.setState({ classes: newState.classes })
  }

  render() {
    
  }

  render() {
    if (this.state.classes.length === 0) {
      return (<div>There are no classes.</div>)
    } else {
    return (
      <div>
        <h2>All Classes</h2>
        {this.state.classes.map(_class => (
          <ClassIndexItem key={_class._id} _class={_class} />
        ))}
      </div>
    )
  }
  }
}

export default withRouter(ClassIndex);