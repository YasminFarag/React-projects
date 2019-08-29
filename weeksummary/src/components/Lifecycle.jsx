import React, { Component } from 'react'

export default class Lifecycle extends Component {

    state={
        date: new Date()
    }
    componentDidMount(){
        console.log('willMount');
        this.reload = setInterval( 
            ()=>
            this.tick(),
            1000
        
        );
            
            }

    componentWillMount()
{
    console.log('didMount');
    
}

    componentWillUnmount(){
        console.log('willUnmount');
        clearInterval(this.reload)
        
    }
    tick=()=>{
        this.setState({
            date: new Date()
        })
    }
    render() {
        console.log('render');
        
        return (
            <div>
                
            <h3>Lifecycle page</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quae, labore vero dolor vel doloribus nobis velit ipsum provident? Aliquid laudantium eos doloremque ipsa rerum, eius hic voluptatum beatae molestiae magni quaerat autem suscipit voluptatem odio totam sequi nostrum quos neque, delectus blanditiis aut! Optio beatae quae id sequi porro, ut dolores provident quas, veritatis placeat exercitationem earum! Non tempore optio, aperiam a, quaerat harum, rem in quos earum debitis illo! Sunt, odio, ipsum voluptatibus architecto repellendus cumque praesentium earum iusto excepturi, error placeat? Quo consequuntur consequatur at aut ad, repudiandae dolorem, illo enim alias, vel quia magnam odio saepe!</p>

            <p onClick={this.tick}>{this.state.date.toLocaleTimeString('de-DE')}</p>
        </div>
           
        )
    }
}
