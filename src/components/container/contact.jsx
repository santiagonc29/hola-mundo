import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import Conectado from '../pure/conectado';


class ContactContainer extends Component {
    render() {
        return (
            <div>
                <h1>Contacto</h1>
                <h2>Nombre: { Contact.nombre } </h2>
                <h2>Apellidos: { Contact.apellidos } </h2>
                <h2>Email: { Contact.Email } </h2>
                <h2>Conexión: { Conectado.conexion ? 'Contacto En Línea' : 'Contacto No Disponible' } </h2>
                <Conectado></Conectado>
                
            </div>
        );
    }
}


ContactContainer.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    Conectado: PropTypes.instanceOf(Conectado)
};


export default ContactContainer;
