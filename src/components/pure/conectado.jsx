import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Conectado extends Component {

    constructor(props){
        super(props);
        this.state = {
            conexion: false
        }
    }

    render() {
        return (
          <div>
            <div>
              <h2>Conexión: {this.state.conexion}</h2>
              <div>
                <button onClick={this.online}>conectar</button>
                <button onClick={this.offline}>desconectar</button>
              </div>
            </div>
          </div>
        );
    }

    online = () => {
        this.setState((prevState) => (
            {
                conexion: prevState.conexion = false
            }
        ))
    }

    offline = () => {
        this.setState((prevState) => (
            {
                conexion: prevState.conexion = true
            }
        ))
    }
}


Conectado.propTypes = {
    conexion: PropTypes.bool,
};


export default Conectado;
