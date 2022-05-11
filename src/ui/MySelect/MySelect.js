import React from 'react';

const MySelect = ({options, defaultValue, filters, setFilters, ...props}) => {
    return (
        <select {...props} value={filters.sort} onChange={(e) => setFilters({...filters, sort: e.target.value})}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;