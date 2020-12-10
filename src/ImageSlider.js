// your ImageSlider code here!

import React, { Component } from 'react';

class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    increment = () => {
        const newSlider = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: newSlider
        })
    }

    

    


    render() {
        const CURRENT_SLIDE = this.state.currentSlideIndex

        if (CURRENT_SLIDE === this.state.currentSlideIndex) {
        return (
            <div>
            I am on slide {CURRENT_SLIDE}
            </div>
        );
        }
    }
}

export default ImageSlider;

