import React from 'react';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            title: 'React App',
            userInput: 'Search string'
        }
        this.inputChange.bind(this);
    }

    inputChange(event) {
        this.setState({ userInput: event.target.value ? event.target.value : 'Search string' })
    }

    render() {
        return (
            <div>
                <center>
                    <h1>
                        Music Store
                    </h1>
                    <center>
                        <input
                            placeholder="Please enter the search"
                            onChange={this.inputChange.bind(this)}
                        />
                    </center>
                    <p>{this.state.userInput}</p>
                </center>
            </div>
        )
    }
}

export default Header;