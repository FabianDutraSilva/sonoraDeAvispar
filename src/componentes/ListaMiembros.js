import React from "react";
import Miembro from "./Miembro";

export default class ListaMiembros extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.miembros.map((miembro) => (
                    <Miembro
                        nombre={miembro.nombre}
                        img={miembro.img}
                        descripcion={miembro.descripcion}
                        instrumento={miembro.instrumento}
                    />
                ))}
            </>
        );
    }
}
