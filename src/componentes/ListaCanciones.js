import React from "react";
import Cancion from "./Cancion";

export default class ListaCanciones extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className='d-flex flex-column'>
                    {this.props.canciones.map((cancion) => (
                        <Cancion nombre={cancion.nombre} letra={cancion.letra} autor={cancion.autor} />
                    ))}
                </div>
            </>
        );
    }
}
