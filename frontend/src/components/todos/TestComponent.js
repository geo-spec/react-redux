import React, {Component} from "react";
import {getButtonData, clearList, loadList} from '../../actions/button_data';
import { getCrud, deleteCrud, addCrud, editCrud } from '../../actions/сrud';
import {connect} from "react-redux";


import { ListItem, ListItemText, TextField, Button, Box } from '@material-ui/core';



class TestComponent extends Component {
  state = {
    addField: 'addField initial',
    editField: 'editCrud initial'
  }

  componentDidMount() {
    this.props.getCrud()
  }

  submitHandler = event => {
    // откулючаем поведение (отправку формы) по-умолчанию
    event.preventDefault()
    const {addField} = this.state
    this.props.addCrud(addField)
    this.setState({'addField':''})
  }

  submitEditHandler = event => {
    event.preventDefault()
    console.log('submitEditHandler')
    const {editField} = this.state
    this.props.editCrud(this.props.crud, editField)
    this.setState({'editField':''})

  }

  changeInputHandler = event => {
    event.persist()
    this.setState(prev => ({...prev, ...{
        [event.target.name]: event.target.value
      }}))
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
        <br/>
        {this.props.crud && this.props.crud.map(item => (
              <Box color="text.primary" key={item.id}>{item.title}</Box>
        ))}
        <br/>
          <form onSubmit={this.submitHandler}>


            <TextField id="standard-basic-22" label="Standard"
                       name="addField"
                       value={this.state.addField}
                         // более универсальное решение
                       onChange={this.changeInputHandler}
                       />


            <Button type="submit">Добавить CRUD</Button>
          </form>


        {/*EDIT*/}
        <form onSubmit={this.submitEditHandler}>
          <TextField id="standard-basic-122" label="Standard"
                     name="editField"
                     value={this.state.editField}
            // более универсальное решение
                     onChange={this.changeInputHandler}
          />
          <Button
            type="submit"
          >
            Редактировать CRUD
          </Button>
        </form>

        <br/> <br/>
        <br/> <br/>
        <Button variant="contained" color="primary" onClick={() => this.props.deleteCrud(this.props.crud)} >Удалить последний элемент</Button>
        <br/>
        <br/>
        <br/> <br/>
        <br/>
        <br/>


      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    buttonText: state.button_data_reducer.buttonText,
    listItems: state.button_data_reducer.listItems,
    crud: Object.values(state.crud)
  }
}
//const mapStateToProps = null

const mapDispatchToProps = {
  getButtonData, clearList, loadList, getCrud, deleteCrud, addCrud, editCrud
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TestComponent);