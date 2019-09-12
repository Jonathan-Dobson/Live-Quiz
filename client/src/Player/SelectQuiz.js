import { Component } from 'react'
import React from 'react'
import { withQuestion } from '../QuestionProvider'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SelectQuiz extends Component{
    constructor(){
        super()
        this.state = { categories: [] }
    }

    componentDidMount(){
        axios.get('/category/').then(res =>{
            this.setState({categories : res.data})
        })
    }
    
    render(){
        const mappedCategories = this.state.categories.map((cat, index) => {
            return(
                <Link className = "category" onClick = {() => this.props.getCategoryQuestions(cat)} key = {index} to = {`/waitingroom/${cat}`} category = {cat} >{cat}</Link>
            )
        })
        return(
            <div className = "category-wrapper" >

                <div>
                Choose a Category: <br></br>
                {mappedCategories}
                </div>
            </div>
        )
       
    }
}

export default withQuestion(SelectQuiz)



