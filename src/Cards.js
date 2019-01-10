import React, { Component } from 'react';
import './Cards.css';

class ZipLocation extends Component {
    render() {

        return (
            <div>
                <p>{this.props.zip}</p>
            </div>
            );
    }
}

class Cards extends Component{
    render() {

        return (
            <div>
                {this.props.zC.length ? this.props.zC.map((zip, i) =>
                    < ZipLocation key={i} zip={zip} />) :
                    "No Zip Found"
                }
            </div>
            );
    }

}

export default Cards;