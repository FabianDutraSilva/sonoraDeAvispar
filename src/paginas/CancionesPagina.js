import React from "react";
import ListaCanciones from "../componentes/ListaCanciones";

export default class CancionesPagina extends React.Component {
    canciones = [
        {
            nombre: "El perro de Zaracatai",
            autor: "Agustín Jones",
            letra: [
                "Llovían gotas madre",
                "nacían sin parar",
                "el día cuando abre",
                "el perro de Zaracatai",
                ".",
                "¡Árbol! ¡Fuego!",
                "Si nunca empezaste no hay final",
                "Cuando juego",
                "meo todo el pasto en Zaracatai",
                ".",
                "Prestame la piel que me voy a fijar",
                "si es todo tan distinto en mi soledad",
                "Prestame la piel que me voy a fijar",
                "si es todo tan distinto en mi soledad",
                ".",
                "Volvían los enjambres",
                "venían de bailar",
                "olían en el aire",
                "el día despertar",
                ".",
                "¡Árbol! ¡Fuego!",
                "Si nunca empezaste no hay final",
                "Cuando juego",
                "meo todo el pasto en Zaracatai",
                ".",
                "Prestame la piel que me voy a fijar",
                "si es todo tan distinto en mi soledad",
            ],
        },
        {
            nombre: "Espiritiburón",
            autor: "Agustín Jones",
            letra: [
                "Las ventanas se me cierran",
                "auque aquí no sople el viento",
                "El velón y la cocina",
                "se me vuelven a apagar",
                ".",
                "Hay un perro que me ladra",
                "hoy me dieron mal el vuelto",
                "como fue hace doce horas",
                "ya no voy a reclamar",
                ".",
                "Una situación muy buena",
                "una situación muy buena",
                "que se va",
                "Pero qué me está pasando?",
                "Qué me está jodiendo?",
                "Y qué será?",
                "Qué será?",
                ".",
                "Que que de que",
                "que será qué?",
                "Que que de qué?",
                "¡El espiritiburón!",
                ".",
                "Como doscientas garrapatas",
                "suben por mi pie izquierdo",
                "son pequeñas pero empiezan a chupar",
                "Como no tengo pasaporte,",
                "los de la migra lo pidieron",
                "el Espiritiburón vino a ayudar",
                ".",
                "Y de una mano como esas",
                "no se puede no se debe abusar",
                "Por eso desaparezco",
                "y aunque busquen no me van a encontrar",
                ".",
                "Que que de que",
                "que será qué?",
                "Que que de qué?",
                "¡El espiritiburón!",
            ],
        },
    ];

    render() {
        return (
            <div className="mb-5">
                <ListaCanciones canciones={this.canciones} />
            </div>
        );
    }
}
