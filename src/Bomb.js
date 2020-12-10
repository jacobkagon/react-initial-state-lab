// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {


    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    increment = () => {
       const newCount = this.state.secondsLeft - 1
       this.setState({
           secondsLeft: newCount
       })
    }
    render() {
        if(this.state.secondsLeft === 0) {
    
        return (
            <div>
            Boom! 
            </div>
        );
    } else {
        return(
            <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        )
    }
    }
}

export default Bomb;
