import React, { Component } from 'react';
import './slide.css';
import SliderA from './imge/sliderf';
import Dots from './imge/Dots';
import data from './imge/imagedata';


export default class Slider extends Component {
    constructor(props){
        super(props)
        this.state={
            slideIndex:0,
            arrow:"right"
        }
    }
    
    componentDidMount(){
        this.timer = setInterval(()=> this.autoPlay(),8000)
    }
    autoPlay(){
        if(this.state.arrow === "right"){
            this.setState({
                slideIndex : this.state.slideIndex === data.length-1 ? 0:this.state.slideIndex+1
            })
        }
        else{
                this.setState({
                    slideIndex: this.state.slideIndex === 0 ? data.length-1:this.state.slideIndex-1
                })
    }
}
    render(){
        return(
                    <div className='slideshow-container'>
                        <SliderA slideIndex={this.state.slideIndex}/>
                        <Dots slideIndex={this.state.slideIndex}/>
                    </div>
        )
    }
}  
