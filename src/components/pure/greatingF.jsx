import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreatingF = (props) => {

    const [age, setage] = useState(29);

    const birthday = () => {
        setage(age + 1);
    }

    return (
      <div>
        <h1>!Hola {props.name} desde función:D</h1>
        <h2>Tu edad es: {age}</h2>
        <div>
          <button onClick={birthday}>Cumpleaños</button>
        </div>
      </div>
    );
};


GreatingF.propTypes = {
    name: PropTypes.string,
};


export default GreatingF;
