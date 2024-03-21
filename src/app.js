import React, { Component } from 'react';
import Search from './search'
import Card from './card'
import Slider from './slider'
import Checkbox from './checkbox';


class App extends Component {
    state = {
        data: [
            { name: 'Oneplus 7T', price: 35000, brand: 'Oneplus' },
            { name: 'Oneplus 8T', price: 51000, brand: 'Oneplus' },
            { name: 'Samsung Galaxy 10', price: 15000, brand: 'Samsung' },
            { name: 'Samsung Note 10', price: 85000, brand: 'Samsung' },
            { name: 'Iphone 7', price: 25000, brand: 'Apple' },
            { name: 'Iphone 11', price: 65000, brand: 'Apple' }
        ],
        filter: [
            { name: 'Oneplus 7T', price: 35000, brand: 'Oneplus' },
            { name: 'Oneplus 8T', price: 51000, brand: 'Oneplus' },
            { name: 'Samsung Galaxy 10', price: 15000, brand: 'Samsung' },
            { name: 'Samsung Note 10', price: 85000, brand: 'Samsung' },
            { name: 'Iphone 7', price: 25000, brand: 'Apple' },
            { name: 'Iphone 11', price: 65000, brand: 'Apple' }
        ]


    }
    onSearch(value) {
        let x = this.state.data.filter(function (item) {
            return item.name.toLowerCase().includes(value)
        })

        this.setState({ filter: x });
    }

    onSort(flag) {
        if (flag) {
            this.setState({ filter: this.state.data });

        } else {
            let x = this.state.data.sort(function (a, b) {
                if (a.price > b.price) {
                    return 1
                }
                if (a.price < b.price) {
                    return -1
                }
                return 0;
                })
                this.setState({ filter: x });
        }
    }


    onSlide(value) {
        let x = this.state.data.filter(function (item) {
            return item.price < value;
        })

        this.setState({ filter: x });

    }
    onCheck(flag, name) {
        if (flag) {
            this.setState({ filter: this.state.data });

        } else {
            let x = this.state.data.filter(function (item) {
                return item.brand === name
            })

            this.setState({ filter: x });
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-2">
                        <div className='row'>
                            <div className='col-12'>
                                <Search onSearch={this.onSearch.bind(this)} />
                            </div>
                            <div className='col-12'>
                                <Slider onSlide={this.onSlide.bind(this)} />
                            </div>
                            <div className="col-12">
                                <p>Select Brand</p>
                                <Checkbox name="Samsung" onCheck={this.onCheck.bind(this)} />
                                <Checkbox name="Apple" onCheck={this.onCheck.bind(this)} />
                                <Checkbox name="Onepluse" onCheck={this.onCheck.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className='row'>
                            <div className='col-12'>
                                <Checkbox name="Price Low to High" onCheck={this.onSort.bind(this)}/>
                            </div>
                        </div>
                        <div className="row">
                            {
                                this.state.filter.map(function (item) {
                                    return <div className="col-4 mt-5" >
                                        <Card name={item.name} price={item.price} />
                                    </div>

                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


