import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render() {
        return (
            <div className='row bg-light fixed-top py-2 px-4'>
                <div className='col-12 d-flex align-items-center'>
                    <h4 className="my-0 mx-3"> Sonora de Avispar </h4>
                    <Link to='/' className='mx-3 '>
                        Inicio
                    </Link>
                    <Link to='/nosotros' className='mx-3'>
                        Nosotros
                    </Link>
                    <Link to='/canciones' className='mx-3'>
                        Canciones
                    </Link>
                    <Link to='/contacto' className='mx-3'>
                        Contacto
                    </Link>
                </div>
            </div>
        );
    }
}
