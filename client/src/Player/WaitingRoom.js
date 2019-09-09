import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'

class WaitingRoom extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>This is the WaitingRoom
                <Link to="/quiz">
                    <button type="button">
                        Begin Quiz!
                    </button>
                </Link>
            </div>
            
        )
    }
}

export default withQuestion(WaitingRoom)