import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom' 
import NewPlayer from './NewPlayer'

const App = () => {
    return(
        <Switch>
            <Route exact path = '/' component = { NewPlayer } />
    
        </Switch>
    )
}

export default App