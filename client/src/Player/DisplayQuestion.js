import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import EditForm from './EditForm'

class DisplayQuestion extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

   
        
    render(){
        const mappedQuestion = this.props.questions.map((quest, index)=> {
            const {question, answerA, answerB, answerC, answerD, _id, funFact, editQuestion } = quest
            const answerArray = [answerA, answerB, answerC, answerD]
            

            this.props.shuffle(answerArray)
            const randomAnswers = () => {
                return (answerArray.map((ans, index ) => {
                    return ( 
                        <div key = {`div:${index}`}>{ans}   </div>
                    )
                }))
            } 



            if( editQuestion ){    
                return(
                    <div key ={`form${_id}`}>
                        <EditForm  props = {quest} index = {index} />
                    </div>
                )
            }else{
                return(
                    <div key = {`answer:${_id}`}  >
                        <div>{ question }</div>
                        { randomAnswers() }
                        <div>{funFact}</div>
                        <button onClick = {() => this.props.toggle(index, editQuestion)} >Edit Question</button>
                        <button onClick = {()=> console.log(editQuestion)}>Display Question quest</button>
                    </div>
                )
            }
        })
    

        return(
            <div>{mappedQuestion}</div>
        )
    }
       
}




export default withQuestion( DisplayQuestion )