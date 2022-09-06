import React  from "react";
import PropTypes from 'prop-types';
import './Entrada.css';

class Entrada extends React.Component{

    render(){
        return(
            <div className="container">
                <p>ID: {this.props.id}</p>
                <input type={this.props.type} />
            </div>
        )
    }
}

Entrada.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
}

export default Entrada;