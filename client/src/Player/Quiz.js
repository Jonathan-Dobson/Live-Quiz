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
                answer2: true,
                answer3: false,
                _id: 'fhhhh',
                funFact: 'fjdlkfj'
        }
    }
    // questionIndex = 0
    // componentDidMount(){
    //     this.setState({question: this.props})
    // }
    

    toggle = (answerSelected, index) => {
        let answered = `answer${index}`
        if(this.state.answers.includes(answerSelected)){
            console.log('included')
            // const indexOfAnswer = this.state.answers.findIndex(answerSelected)
            // console.log(indexOfAnswer)
            // this.setState(prev => { answers: prev.answers.splice(indexOfAnswer, 1)})
    
        }else{
            this.setState((prevState)=>({answers: [...prevState.answers, answerSelected],
                                        [answered]: !prevState[answered]
            }))
        }
        console.log(this.state)
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
                    <button onClick = {() => console.log( this.props.questions ) }>Quiz Props</button>


                </form>
            </div>
        )
    }
}

export default withQuestion(Quiz)