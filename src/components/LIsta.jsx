import React, { useState } from 'react'

const Lista = () => {

    const heroesInicial = [
        "Pinisher",
        'Spiderman',
        'IroMan',
        'BatMan'
    ]
    const [heroes, setHeroes] = useState(heroesInicial)

    const alumnosInicial = [
        {
            id: '201923884',
            nombre: 'DIEGO OSWALDO',
            carrera: 'ISIC'
        },
        {
            id: '201923887',
            nombre: 'JOSE MANUEL MARTINEZ',
            carrera: 'Educacion'
        }
    ]
    const [alumnos, SetAlumnos] = useState(alumnosInicial)

    const agegarSuperHeroe = () => {
        const nuevoHeroe = prompt('Ingresa el nuevo suoerHeroe')
        setHeroes(
            [...heroes,
                nuevoHeroe
            ]
        )
    }
    const agegarAlumno = () => {

        const nuevoalumno = prompt('Ingresa su matricula')
        const nuevoalumno1 = prompt('Ingresa su nombre')

        const nuevoalumno2 = prompt('Ingresa su carrera')
        SetAlumnos(
            [...alumnos,
            {
                id: nuevoalumno,
                nombre: nuevoalumno1,
                carrera: nuevoalumno2
            }
            ]
        )
    }




    return (
        <>
            <h2>Listas Hooks</h2>

            <ol>
                {
                    heroes.map((item, index) => (<li key={index}>{item}</li>))
                }
            </ol>

            <button onClick={agegarSuperHeroe}> Agregar superHeroe</button>

            <h2>Lista de Alumnos</h2>

            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Carrera</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno, index) => (

                        <tr key={index}>
                            <td>{alumno.id}</td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.carrera}</td>
                        </tr>

                    ))
                    }

                </tbody>
            </table>


            <button onClick={agegarAlumno}>Agergar Alumno</button>
        </>

    )
}

export default Lista
