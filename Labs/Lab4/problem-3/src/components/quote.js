import React from 'react';

// quote component

class Quote extends React.Component {

    // api is: https://api.quotable.io/random
    // fetch the api

    constructor(props) {
        super(props);
        this.state = {
            quote: "",
        }
    };

    componentDidMount() {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => this.setState({ quote: data.content }));
    }

    render() {
        return (
            <div
            style={{
                textAlign: 'center',
            }}
            >
                <h2>Here is a random quote!</h2>
                <p>{this.state.quote}</p>
            </div>
        );
    }
}

export default Quote;
