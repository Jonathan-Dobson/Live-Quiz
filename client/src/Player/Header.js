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
            if(this.props.playerName === "Welcome To The Game" && "Enter Your Name to Begin" ){
                return<div>Enter Name to Begin Quiz</div>
            }
            return (
                <div> 
                    <div>
                        {`${this.props.questions.length - this.props.indexOfQuestion} Questions Remaining`} 
                    </div>
                    <div>{`Score:${this.props.score}`}</div>
                </div>
            )
        }

        return(
            <div className = "header-container" >
                <div className = "score-card" >
                    {this.props.playerName}
                    
                    { displayScore() }

                </div>
                <ul className = "link-container" >
                    <Link className = "links" to = '/' onClick = {()=>this.props.namePlayer("Welcome To The Game")} >Home</Link>
                    <Link className = "links" to = '/selectcategory'>Edit Questions</Link>
                </ul>
            </div>

        )
    }
}

export default withQuestion(Header)