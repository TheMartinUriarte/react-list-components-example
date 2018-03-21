import React, { Component } from 'react'
import Specialty from './Specialty'

const SpecialtyList = (props) => {
    const specialtiesComponents = 
        props.specialties.map((specialty) => {
            return <Specialty specialty={specialty}/>
        })

    return (
        <div>
            <h1>Specialties:</h1>
            {specialtiesComponents}
        </div>
    )
}

export default SpecialtyList