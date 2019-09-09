import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'


class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                Header
                <ul>
                    <Link to = '/selectcategory'>Edit Questions</Link>
                </ul>
            </div>

        )
    }
}

export default withQuestion(Header)