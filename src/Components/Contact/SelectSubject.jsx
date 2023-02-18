import React from 'react';
import Select from 'react-select';

export default ({ onChange, options, value, customStyles }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };

    return (
        <div>
            <Select
                id='subject'
                name='subject'
                value={defaultValue(options, value)}
                onChange={value => onChange(value)}
                styles={customStyles}
                options={options}
            />
        </div>

    )
}