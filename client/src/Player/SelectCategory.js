import React, {Component} from 'react'
import {withQuestion} from '../QuestionProvider'
import axios from 'axios'
import {Link} from 'react-router-dom'

class SelectCategory extends Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios
            .get('/category/')
            .then(res => {
                this.setState({categories: res.data})
            })
    }

    handleAddCategory = (e) => {
        e.preventDefault()
        axios
            .post(`/questions`, {category: e.target.newCategory.value, answerA: "", answerB: ""})
            .then(res => {
                console.log(res.data)
                this.setState(prev=>({categories: [...prev.categories,res.data.category]}))
            })
    }

    render() {
        const mappedCategories = this
            .state
            .categories
            .map((cat, index) => {
                return (
                    <li key = {cat + index.toString()}>

                        <Link
                            onClick=
                            {() => this.props.getCategoryQuestions(cat)}
                            key={index}
                            to={`/category/${cat}`}
                            category={cat}>{cat}</Link>
                    </li>
                )
            })
        return (
            <div>
                <form onSubmit={this.handleAddCategory}>
                    <input type="text" name="newCategory" placeholder="Category Name"/>
                    <button>Add New Category</button>
                </form>
                <div>
                    Choose a Category:
                    <ul>
                        {mappedCategories}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withQuestion(SelectCategory)