import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'
import Timer from './Timer'


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
                questionAnswered: false,
                funFactDisplay: ''
        
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
        const {question, answerA, answerB, answerC, answerD, _id, funFact, correctAnswers, time } = this.state.questionToAsk
        const answerArray = [answerA, answerB, answerC, answerD]
        let correctAnswersLength = correctAnswers ? correctAnswers.length : 0
                
        const handleSubmit = (e) => {

            e && e.preventDefault()
            let score = 0 
            const { answers } = this.state
            if(answers.length > 0){
                answers.map(answer => {
                    if(correctAnswers.includes(answer)){
                        return score += 1 
                    }else{
                        return score -= 0.5
                    }
                })  
            }
            this.props.addToScore(score)

            // const funFactDisplay = () => {
                // }
                
            this.setState({questionToAsk: this.props.questions[this.indexToDisplay],
                            questionAnswered: true,
                            answers: []
            })
                
            const correctAnswerStrings = correctAnswers.toString()    
                if(score === correctAnswersLength){
                    return ( this.setState({  funFactDisplay: `Good Job! Answer: ${correctAnswerStrings} ${funFact}` }))
                }else if ( score > 0 ){
                    return ( this.setState({  funFactDisplay: `Almost! Answer: ${correctAnswerStrings} ${funFact}` }) )
                } else {
                    return ( this.setState({  funFactDisplay: `Wrong! Answer: ${correctAnswerStrings} ${funFact}` }))
                }


        }
        
        const handleNextQuestion = (e) => {
            e && e.preventDefault()
            if(this.props.questions.length > this.indexToDisplay +1){
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
            }else{console.log('end of quiz')}
        }


        const randomAnswers = () => {
            // this.props.shuffle(answerArray)
            return (answerArray.map((ans, index ) => {
                let answer = `answer`
                let toggleSelected = this.state[answer]
                return ( 
                    <div className = {`selected${toggleSelected} answer`} onClick = {() => this.toggle(ans, index)} key = {index}>{`${index + 1}: ${ans}`} </div>
                )
            }))
        } 
        const buttonToDisplay = () => {
            if(this.state.questionAnswered){
                if(this.props.questions.length === this.indexToDisplay +1){
                    return (
                        <Link to = '/results'>
                            <button className = "submit-button button" type="button">
                                See Results
                            </button>
                        </Link>
                    )
                } else{
                    return <button className = "submit-button button" onClick = { handleNextQuestion }> Next Question </button>
                }
            }else{
                return <button className = "submit-button button" onClick = { handleSubmit }>Submit</button>
            }
        }
        
        

        return(
            <div key = {_id} className = "question-container">
                <div className = "question-card" >
                    <Timer time = {time} handleSubmit = {handleSubmit}  />
                    <div className = 'question'>{ question }</div>
                    { randomAnswers() }
                    <div onClick = { handleNextQuestion } className = {`answered-${this.state.questionAnswered} fun-fact`} >{this.state.funFactDisplay}</div>

                </div>
                <div className = 'button-container'>
                    { buttonToDisplay() }

                </div>
            </div>
        )
    }
}

export default withQuestion(Quiz)