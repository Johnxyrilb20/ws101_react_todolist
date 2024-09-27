import { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return <h3 id='hero'>Message: {this.props.message}</h3>
    }
}

export default Hero;