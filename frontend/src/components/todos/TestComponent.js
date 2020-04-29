import React, {Component} from "react";
import {getButtonData} from '../../actions/button_data';
import {connect} from "react-redux";


import MyButton from "./MyButton";
import Button from "@material-ui/core/Button";

class TestComponent extends Component {
  componentDidMount() {
    console.log(this.props)
    //this.props.getButtonData()
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.props.getButtonData}> {this.props.buttonText} </Button>
        TestComponent
      </div>
    )
  }
}

// export default class TestComponent {
// }


// const mapStateToProps = state => ({
//   todos: Object.values(state.todos)
// });

const mapStateToProps = state => {
  console.log('state')
  console.log(state.button_data_reducer)
  return {
    buttonText: state.button_data_reducer.buttonText
  }
}
//const mapStateToProps = null

const mapDispatchToProps = {
  getButtonData
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TestComponent);