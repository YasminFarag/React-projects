import React, { Component } from 'react';
import axios from 'axios'


class Home extends Component {

    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
                console.log(res);
                
                this.setState({
                    posts:res.data.slice(0,7)
                })
                
            })      
        
            

    }


    
    render() {
        return (
            <main>
                <p className='paragraph'>Welcome to our blog site</p>
            </main>
        )
    }
}

export default Home
