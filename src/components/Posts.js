import React, { Component } from 'react'

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => this.setState({posts: data}))
        console.log(this.state.posts);
    }
    render() {
        const postItems = this.state.posts.map(post =>(
            <div key ={post.id}>
                
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1 style = {{textAlign: "center"}}>Posts</h1>
                {postItems}
            </div>
        )
    }
}

