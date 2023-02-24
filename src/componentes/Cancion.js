import React from "react";
import Perro from "./Perro";

export default class Cancion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            escondido: true,
            mensajeLetra: "Mostrar Letra",
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
            <>
                <div className='row'>
                    <div className='col-12 my-2'>
                        <h2>{this.props.nombre}</h2>
                    </div>
                    <div className={(this.state.escondido ? "d-none " : "") + "col-12 my-2"}>
                        {this.props.letra.map((letra) => (
                            <p className='m-0'>{letra}</p>
                        ))}
                        <Perro />
                        <p>Autor: {this.props.autor}</p>
                    </div>
                    <div className='col-12 my-2'>
                        <button className='btn btn-danger' onClick={this.toggleEsconder}>
                            Letra
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
