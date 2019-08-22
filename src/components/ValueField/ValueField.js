import React from 'react';

const Field = ({cellValue}) => {
return cellValue?(<p>Coordinates: {cellValue.letter}, {cellValue.number}</p>):<p>Cell info</p>}

export default Field;