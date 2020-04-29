import React, {Component} from "react";
import {getButtonData} from '../../actions/button_data';
import {connect} from "react-redux";


import MyButton from "./MyButton";

class TestComponent extends Component {
  componentDidMount() {
    this.props.getButtonData()
  }

  render() {
    return (
      <div>TestComponent</div>
    )
  }
}

// export default class TestComponent {
// }


// const mapStateToProps = state => ({
//   todos: Object.values(state.todos)
// });
const mapStateToProps = null

const mapDispatchToProps = {
  getButtonData
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TestComponent);