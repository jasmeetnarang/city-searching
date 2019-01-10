import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './Cards';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city : " ",
            zipCode : []
            
        };
    }
    handleChange(e) {
        this.setState({ city: e.target.value });
    }

    handleSearch(e) {
        axios.get("http://ctp-zip-api.herokuapp.com/city/" + this.state.city)
            .then(response => {
                this.setState({ zipCode: response.data });
            })
            .catch(err => {
                this.setState({ zipCode: [] })
                console.log(err)
            })
    }

    render() {
    return (
        <div className="App">
            <h2>City Search</h2>
            <p>City:
                <input type="text" onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleSearch.bind(this)}>Search</button>
            </p>
            <Cards zC={this.state.zipCode} />
      </div>
    );
  }
}

export default App;
