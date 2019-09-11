import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'
import './mike.css'



class Header extends Component{
    constructor(){
        super()
    }

    render(){

        const displayScore = () => {
            if(this.props.playerName !== this.props.quizStarted ){
                return<div>Enter Name to Begin Quiz</div>
            }else{
                return (
                    <div> 
                        <div>
                            {`${this.props.questions.length - this.props.indexOfQuestion} Questions Remaining`} 
                        </div>
                        <div>{`Score:${this.props.score}`}</div>
                        
                    </div>
                )
            }
        }
        const handleLink = () => {
            this.props.namePlayer("Welcome To The Game")
            this.props.endQuiz()
        }


        return(
            <div className = "header-container" >
                <div className = "score-card" >
                    {this.props.playerName}
                    
                    { displayScore() }

                </div>
                <ul className = "link-container" >
                    <Link className = "links" to = '/' onClick = {()=>handleLink} >Home</Link>
                    <Link className = "links" to = '/selectcategory'  onClick = {()=>handleLink} >Edit Questions</Link>
                </ul>
            </div>

        )
    }
}

export default withQuestion(Header)