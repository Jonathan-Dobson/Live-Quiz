import React, { Component } from 'react'
import axios from 'axios'

const { Consumer, Provider } = React.createContext()

class QuestionProvider extends Component{
    constructor (){
        super ()
        this.state = {
            quizQuestions: []
        }
    }
    componentDidMount(){
        axios.get('/questions/').then(res => {
            this.setState({quizQuestion: res.data})
        })
    }
    render (){
        return(
            <Provider value = {{ ...this.state }}>
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