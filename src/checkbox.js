import React, { Component } from 'react';


class Checkbox extends Component {
    state = {

        checked: false,
        name: this.props.name
    }
    onBoxChange(event){
        this.setState({checked: event.target.checked,name: this.props.name})
        this.props.onCheck(this.state.checked,this.state.name)

    }
    render() {
        return (
            <div>
                <input checked={this.state.checked} style={{ marginRight: 15 }} type="checkbox" onChange={this.onBoxChange.bind(this)} />{this.state.name}
        </div>
        );
    }
}

export default Checkbox;