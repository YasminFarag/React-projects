import React, { Component } from 'react'

export class CreateAPost extends Component {
    render() {
        return (
            <section>
                <form>
                    <label>
                        UserName:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Title:
                        <input type="text" />
                    </label>
                    <br />

                    <label>
                        Content:
                        <input type="text" />
                    </label>
                    <br />
                </form>
                
            </section>
        )
    }
}

export default CreateAPost
