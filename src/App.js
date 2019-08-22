import React from 'react';
import './App.css';
import TableContainer from './components/Table/TableContainer';
import ValueFieldContainer from './components/ValueField/ValueFieldContainer';
import SelectFormulaContainer from './components/SelectFormula/SelectFormula';

function App() {
  return (
    <div className="App">
      <ValueFieldContainer/>
      <SelectFormulaContainer/>
      <TableContainer/>
    </div>
  );
}

export default App;
