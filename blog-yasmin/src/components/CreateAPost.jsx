import React, { Component } from 'react'

export class CreateAPost extends Component {
    render() {
        return (
            <section>
                <form>
                    <label >
                        UserName:
                        </label>
                        <input type="text" />
                        <br />
                    
                    <br />
                    <label>
                        Title:
                        </label>
                        <input type="text" />
                        <br></br>

                        <br></br>
                        

                    <label className="box" >
                        Content:
                        </label>
                        <textarea type="text" />
                        <br />
                    

                    <button type='submit'> Creat Post</button>
                </form>
                
            </section>
        )
    }
}

export default CreateAPost
