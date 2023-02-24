import React from "react";
import "./perro.css";

export default class Perro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perro: '',
        };
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    perro: result.message,
                });
            });
    }

    render() {
        return (
            <>
                <img src={this.state.perro} className='perro-thumb'></img>
            </>
        );
    }
}
