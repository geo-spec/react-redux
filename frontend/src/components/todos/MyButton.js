import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


class MyButton extends Component {
  componentDidMount() {
    console.log('componentDidMount')
    fetch('/api/todos/11/')
    .then(response => response.json()
    .then(data => {
      console.log(' MyButtonfinal data', data)
      console.log('data.task', data.task)
      this.setState({my_task:data.task} )
      console.log(this.state)
    })
    );
  }
  render() {
    return (
      <div>
      
        <Button variant="contained" color="primary">
            button 
             {/* {this.state.my_task} */}
        </Button>
        
      </div>
    );
  }
}

export default MyButton;



