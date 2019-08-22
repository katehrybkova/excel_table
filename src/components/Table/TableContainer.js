import { connect } from 'react-redux';
import Table from './Table';
import { changeValue } from '../../redux/actions/valueCellAction';

const mapDispatchToProps = dispatch => ({onChange: (value)=> dispatch(changeValue(value)) });

export default connect(null, mapDispatchToProps)(Table);
