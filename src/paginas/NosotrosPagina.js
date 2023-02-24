import React from "react";
import ListaMiembros from "../componentes/ListaMiembros";

export default class NosotrosPagina extends React.Component {
    miembros = [
        {
            nombre: "Carlos Rodriguez",
            img: "/img/c-rodriguez.PNG",
            instrumento: "Voz",
            descripcion:
                "La voz más afinada del grupo. Transparente y jodón. Viene con el chiste rápido del hombre de campo.",
        },
        {
            nombre: "Agustin Jones",
            img: "/img/a-jones.PNG",
            instrumento: "Guitarra y Voz",
            descripcion:
                "Cabeza creativa de la banda. Autocrítico y reflexivo. Viene con humor apto para toda la familia.",
        },
        {
            nombre: "Flavio Ferrari",
            img: "/img/f-ferrari.PNG",
            instrumento: "Bajo y Voz",
            descripcion: "El motivador de la banda. Empático y entusiasta. Viene con una energía antidepresiva.",
        },
        {
            nombre: "Pablo Rovira",
            img: "/img/p-rovira.PNG",
            instrumento: "Sintetizador",
            descripcion:
                "El más nuevo de la banda. Compañero y sensible. Viene con voz de ultratumba pero agudos al cantar, usa hacks.",
        },
        {
            nombre: "Jonathan Rosano",
            img: "/img/j-rosano.PNG",
            instrumento: "Percusión menor sofisticada",
            descripcion:
                "El dueño del tempo de la banda. Maduro y compinche. Viene con repique mágico que aún no ha mostrado.",
        },
        {
            nombre: "Andres Pereira",
            img: "/img/a-pereira.PNG",
            instrumento: "Sintetizador remoto",
            descripcion:
                "El firulete de la banda. Colgado y feliz. Viene con dedos veloces y aportes en modalidad remota.",
        },
        {
            nombre: "Fabián Dutra",
            img: "/img/f-dutra.PNG",
            instrumento: "Cajón peruano y Voz",
            descripcion:
                "El bueno en nada, aprendiz de todo de la banda. No puedo auto describirme. Viene con un montón de teoría que no sabe aplicar.",
        },
    ];

    render() {
        return (
            <div className="bg-light mb-5">
                <h2>Miembros</h2>
                <ListaMiembros miembros={this.miembros} />
            </div>
        );
    }
}
