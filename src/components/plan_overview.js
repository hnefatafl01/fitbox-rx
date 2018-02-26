import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Plus } from 'react-feather';
import SessionNew from './session_new';

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
    var addNewSession;
    if(this.state.showAdd === true) {
      addNewSession = <SessionNew />;
    } else {
      addNewSession = <br/>;
    }

    return (
      <div className="container">
        <Sparklines data={[5, 10, 5, 20]}>
          <SparklinesLine color="blue" />
        </Sparklines>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-info" style={{'marginTop':'20px'}} onClick={this.handleToggleAdd}>
            <Plus style={{'verticalAlign': 'middle'}}/>
          </button>
        </div>
        {addNewSession}
      </div>
    )
  }
}
