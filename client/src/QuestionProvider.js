import React, { Component } from 'react'
import axios from 'axios'

const { Consumer, Provider } = React.createContext()

class QuestionProvider extends Component{
    constructor (){
        super ()
        this.state = {
            playerName: 'Default Player name',
            score: 0,
            question: '',
            quizQuestion: [],
            questions: [{
                question: 'Question',
                answerA: "answer A",
                answerB: "answer B",
                answerC: "answer C",
                answerD: "answer D",
                category: 'teststate',
                funFact: 'funfact',
                editQuestion: true,
                _id: 'fjkdsljfdsk',
                correctAnswers: []
            
            }],
            updateQuestion: {
                question: 'Question',
                answerA: "answer A update",
                answerB: "answer B update",
                answerC: "answer C update",
                answerD: "answer D update",
                category: 'teststate',
                funFact: 'funfact'
            }
        }
    }
    componentDidMount(){
        axios.get('/questions/').then(res => {
            this.setState({quizQuestion: res.data})
        })
    }

    addToScore = (pointsToAdd) => {
        return (
            this.setState(prev => {
                return({ score: prev.score += pointsToAdd})
            })
        )
    }

    updateStateWithEditedQuestions = (editedQuestions) => {
        
        return(
            this.setState(prev => {
                const updatedQuestions = prev.questions.map(question => editedQuestions._id === question._id ? Object.assign(question, editedQuestions): question )
                return({questions : updatedQuestions})
            })
        )
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }


    toggle = (index, whatToToggle) => {
        
        this.setState(prev => {
            const updatedQuestion = prev.questions[index]
            updatedQuestion.editQuestion = !whatToToggle
            prev.questions.splice(index, 1, updatedQuestion)
            return ({questions: prev.questions})
        })
    }

    shuffle = (array) => {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
          return array
    }
   
    getCategoryQuestions = (category) => {
        axios.get(`/questions/?category=${category}`).then(res => {
            this.setState({questions: res.data })
        })
    }


    render (){
        return(
            <Provider value = {{ ...this.state,
                                getCategoryQuestions: this.getCategoryQuestions,
                                shuffle: this.shuffle,
                                handleChange: this.handleChange,
                                toggle: this.toggle,
                                addToScore: this.addToScore,
                                updateStateWithEditedQuestions: this.updateStateWithEditedQuestions
                                }}>
                { this.props.children }
            </Provider>
        )
    }
}

export default QuestionProvider

export const withQuestion = (Comp) => {
    return(props) => <Consumer>
        {value => <Comp { ...value } { ...props } />}
    </Consumer>
}