import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom' 
import NewPlayer from './NewPlayer'
import TriviaQuestion from'./TriviaQuestion'

const App = () => {
    return(
        <div>
            <TriviaQuestion />
            <Switch>
                <Route exact path = '/' component = { NewPlayer } />
        
            </Switch>

        </div>
    )
}

export default App