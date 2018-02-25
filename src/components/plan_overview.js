import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class PlanOverview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAdd: false
    }
    this.handleToggleAdd = this.handleToggleAdd.bind(this)
  }
  
  handleToggleAdd() {
    this.setState({
      showAdd: !this.state.showAdd
    })
  }
  
  render() {
    return (
      <div className="container">
        <Sparklines data={[5, 10, 5, 20]}>
          <SparklinesLine color="blue" />
        </Sparklines>

        <button href="/plan" className="btn btn-primary" onClick={this.handleToggleAdd}>Add Session</button>
        <button href="/plan/:id/edit" className="btn btn-primary">Edit Session</button>
      </div>
    )
  }
}
