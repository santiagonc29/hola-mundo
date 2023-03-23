import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import ComponenteB from './componenteB';

function componenteA({ contact }) {
  return (
    <div>
      <h2>Nombre: {contact.nombre}</h2>
      <h3>Apellidos: {contact.apellido}</h3>
      <h3>Email: {contact.email}</h3>
      <ComponenteB estado={true} />
    </div>
  );
}

componenteA.propTypes = {
  contact: PropTypes.instanceOf(contact),
};

export default componenteA;