import React, { Component } from 'react';


class Slider extends Component {
    state = { 
        value:"100000"
     } 
     onSlide(event){
        this.setState({value:event.target.value})
        this.props.onSlide(event.target.value)
     }
    render() { 
        return (
            <div >
                <input className='form-contol' min='1000' max='100000' type='range'value={this.state.value} onChange={this.onSlide.bind(this)} /><br></br>
                <p>current :{this.state.value}</p>
            </div>
          
        );
    }
}
 
export default Slider;