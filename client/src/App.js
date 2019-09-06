import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom' 
import NewPlayer from './Player/NewPlayer'
import SelectCategory from './Player/SelectCategory'


const App = () => {
    return(
        <div>
           <SelectCategory />
            <Switch>
                <Route exact path = '/' component = { NewPlayer } />
        
            </Switch>

        </div>
    )
}

export default App