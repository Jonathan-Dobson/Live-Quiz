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
        
        return(
            <div>Welcome!
                <form>
                    Enter Your Name<input type="text" placeholder = 'Enter Name' value = {this.state.playerName} name ='playerName' onChange = {handleChange} />
                    <Link to="/selectquiz">
                        <button onClick = {()=>this.props.namePlayer(this.state.playerName)} type="button">
                            Click Me!
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default withQuestion( NewPlayer )