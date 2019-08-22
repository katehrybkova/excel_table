import React from 'react';
import style from './Table.module.css';

const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];

const onFocus = (e, letter, number) => {
    console.log(e.target.value, letter, number)
}
const Table = ({ onChange }) =>
    <div className={style.grid}>
        <div></div>
        {columns.map(letter => <div key={letter}>{letter}</div>)}

        {rows.map(number =>
            <>
                <div>{number}</div>
                {columns.map(letter =>
                    <div x={letter} y={number} key={letter}>
                        <input onFocus={(e) => {
                            onChange( {letter, number})
                        }} type="text" />
                    </div>)}
            </>)
        }
    </div>


export default Table;