import React from "react";
import "./inicio-pagina.css";

export default class InicioPagina extends React.Component {
    render() {
        return (
            <div className='container d-flex flex-column align-items-center mbottom'>
                <h2 className='my-3 text-danger'>SONORA DE AVISPAR</h2>
                <img src='../img/sonora-de-avispar.jpeg' alt='sonora-de-avispar' className='portada-thumb m-5'></img>
                <h5 className='d-flex justify-content-center'>
                    Un zumbido se siente. Vuelve, lejano pero firme. La madera que ayer fue masticada se hace materia
                    prima de los cimientos de hoy. El manjar animal dio paso al juego, el juego fue vuelo de invitación
                    y la invitación mancomunó el enjambre. El barullo despertó. La reina ha hablado: sean bienvenidos al
                    avispero.
                </h5>
                <h5 className='d-flex justify-content-center m-2'>La reina ha hablado: </h5>
                <h4 className='d-flex justify-content-center m-2 mb-5' >Sean bienvenidos al avispero.</h4>
            </div>
        );
    }
}
