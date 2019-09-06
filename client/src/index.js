import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import QuestionProvider from './QuestionProvider'
import App from './App'


ReactDOM.render(
    <QuestionProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QuestionProvider>
    , document.getElementById('root')
)