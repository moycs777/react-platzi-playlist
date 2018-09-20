import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
    state = {
        value: ''
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value, 'submit value')

    }
    setInputRef = element => {
        //console.log("creacion y referencia del elemento");
        this.input = element;
    }
    handleInputChange = event => {
        console.log("on change del elemento");
        this.setState({
            value: event.target.value.replace(' ', '-')
        })
    }
    render() {
        return (
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />
        )
    }
}

export default SearchContainer;