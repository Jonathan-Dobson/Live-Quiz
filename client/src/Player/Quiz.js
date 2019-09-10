import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'

class Quiz extends Component{
    constructor(){
        super()
        this.state = {
                answers: [],
                question: 'sample',
                answer0: false,
                answer1: false,
                answer2: false,
                answer3: false,
                _id: 'fhhhh',
                funFact: 'fjdlkfj',
                correctAnswers: []
        }
    }
    
    toggle = (answerSelected, index) => {
        let answered = `answer${index}`
        if(this.state.answers.includes(answerSelected)){
            this.setState(prev => { 
                let x = prev.answers.indexOf(answerSelected)
                return({answers: prev.answers.splice(x, 1),
                    [answered]: !prev[answered]
                })
            })
        }else{
            this.setState((prevState)=>({answers: [...prevState.answers, answerSelected],
                                        [answered]: !prevState[answered]
            }))
        }
    }
    render(){
        let indexToDisplay = 0
        const {question, answerA, answerB, answerC, answerD, _id, funFact } = this.props.questions[indexToDisplay]
        const answerArray = [answerA, answerB, answerC, answerD]
            

        const randomAnswers = () => {
            // this.props.shuffle(answerArray)
            return (answerArray.map((ans, index ) => {
                let answer = `answer${index.toString()}`
                let toggleSelected = this.state[answer]
                return ( 
                    <div className = {`selected${toggleSelected}`} onClick = {() => this.toggle(ans, index)} key = {index}>{`${index + 1}: ${ans}`} </div>
                )
            }))
        } 
        return(
            <div key = {_id}>
                <form>
                    <div>{ question }</div>
                    { randomAnswers() }
                    <div>{funFact}</div>


                </form>
                    <button onClick = {() => console.log( this.state ) }>Quiz State</button>
            </div>
        )
    }
}

export default withQuestion(Quiz)