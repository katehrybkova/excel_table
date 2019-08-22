import {connect} from 'react-redux';
import React from 'react';
import ValueField from './ValueField.js'


const mapStateToProps = state => ({
    cellValue: state.cellValue,
})

export default connect(mapStateToProps)(ValueField);

