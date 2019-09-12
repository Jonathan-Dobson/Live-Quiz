import React, {Component} from 'react'

class Timer extends Component{
    constructor(){
        super()
        this.state = {time: 100}
    }
    componentDidMount(){
        this.setState({time: this.props.time})
        
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

        if(this.state.time < 0) clearInterval(this.countDown)


        const runSubmit = () =>{
            if(this.state.timedOut) {
                return(null)
            }else{
                this.props.handleSubmit()
                this.setState({ timedOut : true })
            }
        }
        if(this.state.time === 0) runSubmit() 

        const styleEmpty = {
            width: 50,
            height: 50,
            background: "blue",
            position: "absolute",
            bottom: 0,
            right: 0
        }
        const styleFull = {
            width: 50,
            height: `${ 100 - (100 * (this.state.time / this.props.time))}%`,
            maxHeight: "100%",
            background: "red",
            position: "absolute",
            bottom: 0,
            right: 0
        }
        if(this.state.time > 0){
            
            return(
                <div className = "timer-container" >
                    <div style = {{position: "relative"}} >{this.state.time}
                        <div style = {styleEmpty}>
                            <div style = {styleFull}></div>
                        </div>
                            
                    </div>
    
                </div>
            )
        } else{
            return(
                <div className = "timer-container" >
                    <div style = {{position: "relative"}} >Time Remaining: 0
                        <div style = {styleEmpty}>
                            <div style = {styleFull}></div>
                        </div>
                            
                    </div>
    
                </div>
            )
        }
    }
}

export default Timer

