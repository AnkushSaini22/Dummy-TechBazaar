import React, { Component } from 'react';
class Search extends Component {
    state = { 
       value:""
     }
    onTextChange(event){
        this.setState({value:event.target.value})
        this.props.onSearch(event.target.value)
    } 
    render() { 
        return (
            <div>
                <input className='form-control' type='text'  value={this.state.value} onChange={this.onTextChange.bind(this)}/>
            </div>
        );
    }
}
 
export default Search;