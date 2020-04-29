import React, {Component} from "react";
import {getButtonData, clearList, loadList} from '../../actions/button_data';
import {connect} from "react-redux";


import MyButton from "./MyButton";
import Button from "@material-ui/core/Button";
import { ListItem, ListItemText } from '@material-ui/core';



class TestComponent extends Component {
  componentDidMount() {
    console.log(this.props)
    //this.props.getButtonData()
  }

  render() {
    return (
      <div>
        {this.props.listItems.map(item => (
          <ListItem href="#simple-list" key={item.id}>
            <ListItemText primary={item.title} key={item.id}/>
          </ListItem>
        ))}
        <br/>
        <Button variant="contained" color="primary" onClick={this.props.getButtonData}> {this.props.buttonText} </Button>
        <br/>
        <Button variant="contained" color="primary" onClick={this.props.clearList}> Очиcтить массив </Button>
        <br/>
        <Button variant="contained" color="primary" onClick={this.props.loadList}> Загрузить элементы</Button>
        <br/>
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
    buttonText: state.button_data_reducer.buttonText,
    listItems: state.button_data_reducer.listItems,
  }
}
//const mapStateToProps = null

const mapDispatchToProps = {
  getButtonData, clearList, loadList
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TestComponent);