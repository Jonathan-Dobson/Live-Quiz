import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'


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
                correctAnswers: [],
                questionToAsk: {},
                questionAnswered: false
        
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

    indexToDisplay = 0
    componentDidMount(){
        this.setState({questionToAsk: this.props.questions[this.indexToDisplay] })
    }
    render(){
        const {question, answerA, answerB, answerC, answerD, _id, funFact, correctAnswers } = this.state.questionToAsk
        const answerArray = [answerA, answerB, answerC, answerD]
        let correctAnswersLength = correctAnswers ? correctAnswers.length : 0
                
        const handleSubmit = (e) => {
            e.preventDefault()
            let score = 0 
            let possible = correctAnswersLength
            const { answers } = this.state
            
            
            
            this.setState({questionToAsk: this.props.questions[this.indexToDisplay],
                            answer0: false,
                            answer1: false,
                            answer2: false,
                            answer3: false,
                            questionAnswered: true
            })
            if(answers.length > 0){
                    answers.map(answer => {
                        console.log(correctAnswers, answer,correctAnswers.includes(answer), score)
                        if(correctAnswers.includes(answer)){
                             score += 1 
                        }else{
                        }return score
                    })  
            }
            this.props.addToScore(score)
            console.log(possible)
        }
            
        const handleNextQuestion = (e) => {
            e.preventDefault()
            this.indexToDisplay += 1 
            return(
                this.setState({questionToAsk: this.props.questions[this.indexToDisplay],
                    answer0: false,
                    answer1: false,
                    answer2: false,
                    answer3: false,
                    questionAnswered: false
                })
            )
        }


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
        const buttonToDisplay = () => {
            if(this.state.questionAnswered){
                if(this.props.questions.length === this.indexToDisplay +1){
                    return (
                        <Link to = '/results'>
                            <button className = "submit-button" type="button">
                                See Results
                            </button>
                        </Link>
                    )
                }
                return <button className = "submit-button" onClick = { handleNextQuestion }> Next Question </button>
            }else{
                return <button className = "submit-button" onClick = { handleSubmit }>Submit</button>
            }
        }


        return(
            <div key = {_id}>
                <div >
                    <div>{ question }</div>
                    { randomAnswers() }
                    <div>{funFact}</div>

                    { buttonToDisplay() }

                </div>
            </div>
        )
    }
}

export default withQuestion(Quiz)