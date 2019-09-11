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
                {this.props.playerName}
                <div>{`Score:${this.props.score}`}</div>
                <div> {`${this.props.questions.length - this.props.indexOfQuestion} Questions Remaining`} </div>
                <ul>
                    <Link to = '/selectcategory'>Edit Questions</Link>
                </ul>
            </div>

        )
    }
}

export default withQuestion(Header)