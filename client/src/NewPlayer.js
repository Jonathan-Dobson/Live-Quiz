import React, { Component } from 'react'
import { withQuestion } from './QuestionProvider'

class NewPlayer extends Component {
    constructor(){
        super()
        this.state ={}
    }
    render() {
        return(
            <div>Hello
                <button onClick = {() => console.log(this.props.quizQuestion)} >ConsoleLogProps</button>
            </div>
        )
    }
}

export default withQuestion( NewPlayer )