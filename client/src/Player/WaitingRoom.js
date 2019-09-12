import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'

class WaitingRoom extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "waiting-room" >Wait for Other Players, or Begin Quiz
                <Link to="/quiz" className = "waiting-room-button" >
                <br></br>
                    <button type="button" className = "button" >
                        Begin Quiz!
                    </button>
                </Link>
            </div>
            
        )
    }
}

export default withQuestion(WaitingRoom)