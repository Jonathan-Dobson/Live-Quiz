import React, { Component } from 'react'
import { withQuestion } from '../QuestionProvider'
import { Link } from 'react-router-dom'


class NewPlayer extends Component {
    constructor(){
        super()
        this.state ={}
    }
    render() {
        return(
            <div>Welcome!
                <form>
                    Enter Your Name<input type="text" value = {this.props.playerName} name ='playerName' onChange = {this.props.handleChange} />
                    <Link to="/selectquiz">
                        <button type="button">
                            Click Me!
                    </button>
 </Link>
                </form>
            </div>
        )
    }
}

export default withQuestion( NewPlayer )