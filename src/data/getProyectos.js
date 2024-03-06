import React from 'react'

import proyec_gestor from '../img/proyectos/gestorAfiliados.png'
import proyec_centroMedico from '../img/proyectos/centro_medico.png'
import proyec_warOfSpace from '../img/proyectos/juego_python.png'


export const getProyectos = () => {
  return[
    {
        title: 'Gestor de afiliados',
        tecnologias: '.NET | C# | SQL Server',
        descripcion: 'Esta aplicación proporciona una solución completa y eficiente para la gestión de afiliados de una obra social, mejorando la accesibilidad y la organización. Facilitando las operaciones administrativas relacionadas con los afiliados. Esta desarrollada en C# utilizando .NET',
        url: 'www.github.com',
        img: proyec_gestor,

    },
    {
        title: 'Centro medico',
        tecnologias: '.NET | C# | SQL Server',
        descripcion: 'Es una aplicacion que permite administrar pacientes. Fue diseñada para que el/la recepcionista ingrese un paciente en guardia y el medico de turno pueda visualizar en tiempo real la fila de espera. Luego el medico podra atenderlo, diagnosticandolo y cargando una historia clinica.',
        img: proyec_centroMedico,

    },
    {
        title: 'War of space',
        tecnologias: 'PYTHON | SQLite',
        descripcion: 'Es un juego desarrollado con la libreria PYGAMES para el final de laboratorio |. Tiene 3 niveles con una barra de vida. A medida que transcurre el tiempo aumenta la dificultad. Cada nivel tiene una mayor dificultad y un distinto escenario.',
        img: proyec_warOfSpace,

    },

]
}
