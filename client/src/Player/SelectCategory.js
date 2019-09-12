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
        e.target.newCategory.value.length>=3 &&
        this.state.categories.some(cat=>cat===e.target.newCategory.value)===false &&
        axios
            .post(`/questions`, {category: encodeURI(e.target.newCategory.value), answerA: "", answerB: ""})
            .then(res => {
                this.setState(prev=>({categories: [...prev.categories,res.data.category]}))
            })
    }

    handleDelete = (category) => {
        console.log('delete', category);
        axios.delete(`/category/${encodeURI(category)}`).then(res=>{
            console.log('deleted',res);
            this.setState(prev=>({categories: [...prev.categories.filter(cat=>cat !== category)]}))
        })
        .catch(e=>console.log('Error deleting',e))
    }
    render() {
        const mappedCategories = this
            .state
            .categories
            .map((cat, index) => {
                return (
                    <li>
                            <button onClick={()=>this.handleDelete(cat)}> x </button> &nbsp;

                        <Link
                            onClick=
                            {() => this.props.getCategoryQuestions(cat)}
                            key={index}
                            to={`/category/${cat}`}
                            category={cat}>{decodeURI(cat)}</Link>
                    </li>
                )
            })
        return (
            <div>
                <button onClick= {() => console.log(this.props)}>SelectCategory Props</button>
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