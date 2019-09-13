import React, {Component} from 'react'

class Timer extends Component{
    constructor(){
        super()
        this.state = {time: 100}
    }
    componentDidMount(){
        this.setState({time: this.props.time,
                       handleSubmit : this.props.handleSubmit,
                       size: this.props.time            
        })
        
    }
    timer = () => {
        this.setState(prev => {
           return { time: prev.time -= 1 }
        })
    }

    countDown = setInterval(() => {
        this.timer()
    }, 1000)

    componentWillUnmount(){
        clearInterval(this.countDown)
    }
    
   
    
    
    render(){

        if(this.state.time === 0) {
            clearInterval(this.countDown)
            this.state.handleSubmit()
            this.setState({ time : -1 })
        
        }


        const styleEmpty = {
            width: 50,
            height: 208,
            background: "grey",
            position: "absolute",
            bottom: 0,
            right: 0
        }
        const styleFull = {
            width: 50,
            height: `${ 100 - (100 * (this.state.time / this.state.size))}%`,
            maxHeight: "100%",
            background: "lightGrey",
            position: "absolute",
            bottom: 0,
            right: 0
        }

        const timeDisplay = () => {
            return(this.state.time >= 0) ? this.state.time : 0
        }
    
            
        return(
            <div className  >
                <div className = "timer-container" >
                    <div style = { styleEmpty }>
                        <div style = { styleFull }></div>
                    </div>

                </div>
                <div className = "time-remaining" >Time Remaining: { timeDisplay() } </div>

            </div>
        )
        
        
    }
}

export default Timer

