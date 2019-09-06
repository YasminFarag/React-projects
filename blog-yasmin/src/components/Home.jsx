import React from 'react'

const Home = (props)=> {
    
console.log(props);

setTimeout(() => {
    props.history.push('/createAPost')
    
},4000);

    
    
        return (
            <main>
                <p className='paragraph'>Welcome to our blog site</p>
            </main>
        )
    }


export default Home
