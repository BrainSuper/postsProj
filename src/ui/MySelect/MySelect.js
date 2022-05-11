import React from 'react';

const MySelect = ({options, defaultValue, value, onSortChange}) => {
    return (
        <select value={value} onChange={(e) => onSortChange(e.target.value)}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;