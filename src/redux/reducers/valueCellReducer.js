import { Type } from '../actions/valueCellAction';


const productReducer = (state = "", { type, payload }) => {
  switch (type) {
    case Type.CHANGE_VALUE: return payload;
    default:
     return state;
  };
}
export default productReducer;
