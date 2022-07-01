import React, { Component } from 'react';
    
class PersonCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         position: "On"
    //     };
    // }
    // flipSwitch = () => {
    //     if( this.state.position === "On" ) {
    //         this.setState({ position: "Off" });
    //     } else {
    //         this.setState({ position: "On" });
    //     }
    // }
    // render() {
    //     return (
    //         <fieldset>
    //             <p>The light is currently { this.state.position }</p>
    //             <button onClick={ this.flipSwitch }>Flip Switch</button>
    //         </fieldset>
    //     );
    // }
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h2>{firstName} {lastName}</h2>
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {hairColor}</h4>
                <button onClick={() => this.setState({age: this.state.age + 1})}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;