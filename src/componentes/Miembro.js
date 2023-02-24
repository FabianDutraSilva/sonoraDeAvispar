import React from "react";
import "./miembro.css";

export default class Miembro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            escondido: true,
        };
        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder() {
        this.setState((prevState) => ({
            escondido: !prevState.escondido,
        }));
    }

    render() {
        return (
            <div className="row p-2 ">
                <div className='col-12 d-flex align-items-center'>
                    <img src={this.props.img} alt={this.props.nombre} className='member-thumb'></img>
                    <div className='pl-3'>
                        <h2 className="py-2"> {this.props.nombre} </h2>
                        <h5 className="py-2"> {this.props.instrumento} </h5>
                        <p className={(this.state.escondido ? "d-none " : "")}> {this.props.descripcion} </p>
                        <button className='btn btn-danger' onClick={this.toggleEsconder}>
                            Cuéntame más
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
