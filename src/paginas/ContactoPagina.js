import React from "react";

export default class ContactoPagina extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            mensaje: "",
        };

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }

    submitted(event) {
        alert("Se envió el formulario de: " + this.state.nombre);
        event.preventDefault();
    }

    changed(event) {
        this.setState({
            nombre: event.target.value,
            mensaje: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2> Contactanos! </h2>
                <form className='my-3' onSubmit={this.submitted}>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group my-2'>
                                <label className='form-label'>Nombre</label>
                                <input type='text' className='form-control' onChange={this.changed}></input>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group my-2'>
                                <label className='form-label'>Apellido</label>
                                <input type='text' className='form-control' onChange={this.changed}></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group my-2'>
                                <label className='form-label'>Show objetivo</label>
                                <select type='text' className='form-control' onChange={this.changed}>
                                    <option>Cumpleaños adulto</option>
                                    <option>Casamiento</option>
                                    <option>Fiesta privada</option>
                                    <option>Asado</option>
                                    <option>Cumpleaños infantil</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group my-2'>
                                <label className='form-label'>Descripción</label>
                                <input type='text' className='form-control' onChange={this.changed}></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group my-2'>
                                <label className='form-label'>Cuenta con equipos de amplificación?</label>
                                <select type='text' className='form-control' onChange={this.changed}>
                                    <option>Si</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group my-2'>
                                <label className='form-label'>Liste los equipos a disposición</label>
                                <input type='text' className='form-control' onChange={this.changed}></input>
                            </div>
                        </div>
                    </div>

                    <div className='form-group my-2'>
                        <label>Mensaje</label>
                        <textarea className='form-control'></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2'>
                        Enviar
                    </button>
                </form>
                <h2>Escuchanos que te escuchamos!</h2>
                <h5>Cel: +598 9XX XXX</h5>
                <h5>Email: sonoradeavisparuy@gmail.com</h5>
                <h5>Instagram: @sonoradeavispar</h5>
            </div>
        );
    }
}
