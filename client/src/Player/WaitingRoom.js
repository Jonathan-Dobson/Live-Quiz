import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'

class WaitingRoom extends Component {
    constructor(){
        super()
    }

    render(){
        return(

            <div className = "waiting-room" >Wait for others, or press Start to begin
                <br></br>
                <Link to="/quiz" className = "waiting-room-button" >
                    <button className = "button" type="button">

                        Begin Quiz!
                    </button>
                </Link>
            </div>
            
        )
    }
}

export default withQuestion(WaitingRoom)