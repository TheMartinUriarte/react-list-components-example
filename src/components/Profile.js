import React, { Component } from 'react'

import SpecialtyList from './SpecialtyList'
import Specialty from './Specialty'

class Profile extends Component {

    render() {

        const specialties = [
            'Java',
            'Python',
            'JavaScript',
            'React',
            'Ruby'
        ]

        return (
            <div>
                <img src="http://www.placecage.com/200/300" />
                <h1>Nic Cage</h1>
                <h3>Full Stack Developer</h3>

                <SpecialtyList specialties={specialties}/>
            </div>
        )
    }

}

export default Profile

