import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'


class Results extends Component{
    constructor () {
        super ()

    }

    render(){
        return(
            <div className ="score-card" >
                <div className = "results-name" >
                    { this.props.playerName }
                </div  >
                <div className = "results-score">
                    Score:{this.props.score}

                </div>
            
                
            </div>
        )
    }
}

export default withQuestion(Results)