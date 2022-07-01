import React, { Component } from 'react';
    
class PersonCard extends Component {
    render() {
        const { users } = this.props;
        return (
            <div>
                {users.map((person, index) => {
                    return (
                        <div key={index}>
                            <h2>{person.firstName} {person.lastName}</h2>
                            <p>Age: {person.age}</p>
                            <p>Hair Color: {person.hairColor}</p>
                        </div>
                )})}
            </div>
        )
    }
}

export default PersonCard;