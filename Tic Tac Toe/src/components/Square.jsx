import React, { Component } from 'react'

export default class Square extends Component {
    render() {
        return (
            <div>
                <h2>check player</h2>
                <form>
                   <label>PLayer X</label>
                   <input type="radio" />
                   {/* player O */}
                   <label>PLayer O</label>
                   <input type="radio" />
                    </form>

                    </div>
        )
    }
}
