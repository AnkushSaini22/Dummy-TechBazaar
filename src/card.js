import React, { Component } from 'react';
import './card.css'; // Import custom CSS file for styling

class Card extends Component {
    render() {
        return (
            <div className='card-container'> {/* Apply custom class for container */}
                <div className='card'>
                    <div className='card-body'>
                        <h2>{this.props.name}</h2>
                        <h4>Rs {this.props.price}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
