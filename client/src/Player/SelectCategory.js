import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import axios from 'axios'



class SelectCategory extends Component {
    constructor(){
        super()
        this.state = {
            categories: []
        }

    }

    componentDidMount(){
        axios.get('/category/').then(res =>
            console.log(res.data))
    }
    
    
    render(){
        return(
            <button onClick = {() => console.log(this.props)}>SelectCategory Props</button>
        )
    }
}

export default withQuestion( SelectCategory )