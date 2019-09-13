import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'
import './mike.css'



class Header extends Component{
    constructor(){
        super()
        this.state = {
            questions: 0,
            index: 0
        }
    }





    render(){

        const displayScore = () => {
            if(!this.props.quizStarted ){
                return<div className = "name" >Enter Name to Begin Quiz</div>
            }else{
                console.log(this.props.indexOfQuestion)
                return (
                    <div> 
                        <div>
                            {`${ this.props.quizLength - this.props.indexOfQuestion } Questions Remaining`} 
                        </div>
                        <div>{`Score:${this.props.score}`}</div>
                        
                    </div>
                )
            }
        }
        const handleLink = () => {
            this.props.endQuiz()
            this.props.namePlayer("Welcome To The Game")
        }


        return(
            <div className = "header-container" >
                <div className = "name" >
                    {this.props.playerName}
                    
                    { displayScore() }

                </div>
                <ul className = "link-container" >
                    <Link className = "links" to = '/' onClick = {()=>handleLink()} >Home</Link>
                    <Link className = "links" to = '/selectcategory'  onClick = {()=>handleLink} >Edit Questions</Link>
                </ul>
            </div>

        )
    }
}

export default withQuestion(Header)