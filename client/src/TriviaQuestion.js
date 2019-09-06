import React, { Component } from 'react'
import { withQuestion } from './QuestionProvider'

class TriviaQuestion extends Component {
    render(){
        return(
            <div>test</div>
        )
    }
}

export default withQuestion( TriviaQuestion )