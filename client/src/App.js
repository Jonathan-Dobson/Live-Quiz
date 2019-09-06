import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom' 
import NewPlayer from './NewPlayer'
import SelectCategory from './SelectCategory'


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