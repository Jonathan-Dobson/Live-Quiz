import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'


class Results extends Component{
    constructor () {
        super ()

    }

    render(){
        return(
            <div>
                Score:{this.props.score}
            
                <button onClick = { ()=>this.props.addToScore(1) }>Results Props</button>
            </div>
        )
    }
}

export default withQuestion(Results)