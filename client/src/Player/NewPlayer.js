import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'


class NewPlayer extends Component {
    constructor(){
        super()
        this.state ={ playerName : ''}
    }
    render() {
        const handleChange = (e) =>{
            this.setState({[e.target.name]: e.target.value})
        }
        const handleSubmit = (e) =>{
            e.preventDefault()
        }
        
        return(
            <div className = "enter-name" >Welcome!
                <form onSubmit = {handleSubmit} >

                    Enter Your Name<br></br>
                    <input type="text" placeholder = 'Enter Name' value = {this.state.playerName}  name ='playerName' onChange = {handleChange} />
                    <br></br>
                    <Link to="/selectquiz">
                        <button className = "button" onClick = {()=>this.props.namePlayer(this.state.playerName)} type="button">
                            Enter

                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default withQuestion( NewPlayer )