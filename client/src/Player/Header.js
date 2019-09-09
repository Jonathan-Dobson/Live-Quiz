import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'


class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                Header
                <ul>
                    <li>links</li>
                </ul>
            </div>

        )
    }
}

export default withQuestion(Header)