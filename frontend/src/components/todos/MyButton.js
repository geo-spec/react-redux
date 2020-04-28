import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


class MyButton extends Component {

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



