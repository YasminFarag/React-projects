import React  from 'react';
import './Header.css';

const Header = props => { // stateless function = functional components
    
        return(
            <div className="header">
                {/* comment must be inside curly braces */}
                    <h1>what to do?</h1>
                    <div>{props.tagline}</div>

                    </div>
                    )
        
}

export default Header;