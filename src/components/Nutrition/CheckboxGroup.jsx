import React, { useState } from 'react';

const CheckboxGroup = ({group, onChange}) => {

    const toggleCheckbox = (id) => {
        const updatedCheckboxes = group.map((checkbox) => {
            if (checkbox.id === id) {
                return { ...checkbox, checked: !checkbox.checked };
            }

            return checkbox;
        });
        onChange(updatedCheckboxes);
    };

    const toggleAllCheckboxes = () => {
        const updatedCheckboxes = group.map((checkbox) => ({
            ...checkbox,
            checked: !checkbox.checked,
        }));
        onChange(updatedCheckboxes);
    };

    return (
        <div className='checkbox-content'>
            <div className='choose-all'>
                <input type="checkbox" className='custom-checkbox'
                       onChange={toggleAllCheckboxes}/>
                <label >Choose all</label>
            </div>

            {(group).map((item) => (
                <li className='product-list' key={item.label}>
                    <input type="checkbox" id={item.label} className='custom-checkbox' checked={item.checked}
                           onChange={()=> toggleCheckbox(item.id)}
                    />
                    <label htmlFor={item.label}>{item.label}</label></li>
            ))}
        </div>

    )
};

export {CheckboxGroup}

