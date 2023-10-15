import React, { useState } from 'react';
import {CheckboxGroup} from './CheckboxGroup';

const Accordion = (props) => {
    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const toggleAccordion = (index) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };

    const accordionItems = [
        {
            title: 'Choose the carbohydrates you consume',
            content: props.nutritionK,
            handler: props.nutritionKHandler
        },
        {
            title: 'Choose the proteins you consume',
            content: props.nutritionP,
            handler: props.nutritionPHandler
        },
        {
            title: 'Choose milk products you consume',
            content: props.nutritionM,
            handler: props.nutritionMHandler
        },
        {
            title: 'Choose nuts and seeds you consume',
            content: props.nutritionO,
            handler: props.nutritionOHandler
        },
        {
            title: 'Choose fruits you consume',
            content: props.nutritionF,
            handler: props.nutritionFHandler
        },
        {
            title: 'Choose oil products you consume',
            content: props.nutritionJ,
            handler: props.nutritionJHandler
        }
    ];



    return (
        <div className="accordion">
            {accordionItems.map((item, index) => (
                <div
                    key={index}
                    className={`accordion-item ${expandedIndexes.includes(index) ? 'expanded' : ''}`}>

                    <div
                        className="accordion-header input-title select"
                        onClick={() => toggleAccordion(index)}>
                        <span>{item.title}</span>
                        <span>^</span>
                    </div>

                    <div
                        className={`accordion-content ${expandedIndexes.includes(index) ? 'expanded' : ''}`}
                        style={{ maxHeight: expandedIndexes.includes(index) ? '1000px' : '0' }}>
                        <CheckboxGroup group={item.content} onChange={item.handler}/>

                    </div>

                </div>
            ))}
        </div>
    );
};


export {Accordion}