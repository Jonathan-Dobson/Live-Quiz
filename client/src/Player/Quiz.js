import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'

class Quiz extends Component{
    constructor(){
        super()
        this.state = {
                question: 'sample',
                answerA: false,
                answerB: false,
                answerC: true,
                answerD: false,
                _id: 'fhhhh',
                funFact: 'fjdlkfj'
        }
    }
    // questionIndex = 0
    // componentDidMount(){
    //     this.setState({question: this.props})
    // }
    toggle = (question) => this.setState((prevState)=>({[question]: !prevState[question]}))
    render(){
        let indexToDisplay = 0
        const {question, answerA, answerB, answerC, answerD, _id, funFact } = this.props.questions[indexToDisplay]
        const answerArray = [answerA, answerB, answerC, answerD]
            

        const randomAnswers = () => {
            this.props.shuffle(answerArray)
            return (answerArray.map((ans, index ) => {
                return ( 
                    <div onClick = {() => this.toggle(ans)} key = {index}>{`${index + 1}: ${ans}`} </div>
                )
            }))
        } 
        return(
            <div key = {_id}>
                <form>
                    <div>{ question }</div>
                    { randomAnswers() }
                    <div>{funFact}</div>
                    <button onClick = {() => console.log( this.props.questions ) }>Quiz Props</button>


                </form>
            </div>
        )
    }
}

export default withQuestion(Quiz)