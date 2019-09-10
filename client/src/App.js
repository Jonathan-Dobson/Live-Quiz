import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import NewPlayer from './Player/NewPlayer'
import SelectCategory from './Player/SelectCategory'
import DisplayQuestion from './Player/DisplayQuestion'
import Quiz from './Player/Quiz'
import Header from './Player/Header'
import WaitingRoom from './Player/WaitingRoom'
import SelectQuiz from './Player/SelectQuiz'
import './App.css'

const App = () => {
    return(
        <div>
            <Header />
            
            <Switch>
                <Route exact path = '/' component = { NewPlayer } />
                <Route path = '/category/:category' component = {DisplayQuestion} />
                <Route path = '/waitingroom' component = { WaitingRoom } />
                <Route path = '/selectquiz' component = { SelectQuiz } />
                <Route path = '/quiz' component = { Quiz } />
                <Route path = '/selectcategory' component = { SelectCategory } />
         
           </Switch> 
        </div>
    )
}

export default App