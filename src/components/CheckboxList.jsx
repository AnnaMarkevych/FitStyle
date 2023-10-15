import React, { useState, useEffect } from 'react';

function CheckboxList() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [checkboxes, setCheckboxes] = useState([
        { id: 'ad1', label: 'Your personal trainer', checked: false },
        { id: 'ad2', label: 'Your personal food program', checked: false },
        { id: 'ad3', label: 'Nutrition', checked: false },
        { id: 'ad4', label: 'Sport wear', checked: false },
        { id: 'ad5', label: 'Sport equipment', checked: false },
        { id: 'ad6', label: 'Challenges every day', checked: false },
        { id: 'ad7', label: 'Your favorite trainings', checked: false },
        { id: 'ad8', label: 'You can do it!', checked: false },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Отмечаем текущий чекбокс
            const updatedCheckboxes = [...checkboxes];
            updatedCheckboxes[currentIndex].checked = true;

            // Обновляем состояние чекбоксов
            setCheckboxes(updatedCheckboxes);

            // Если достигнут последний чекбокс, сбрасываем все и начинаем сначала
            if (currentIndex === checkboxes.length - 1) {
                setCheckboxes(checkboxes.map((checkbox) => ({ ...checkbox, checked: false })));
                setCurrentIndex(0);
            } else {
                // Переходим к следующему чекбоксу
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, 1000); // Интервал в миллисекундах (здесь 2 секунды)

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(interval);
    }, [currentIndex, checkboxes]);

    return ( <div className='advantages'>
        <ul className='advantages-list'>
            {checkboxes.map((checkbox) => (
                <li key={checkbox.id}>
                    <input
                        type="checkbox"
                        id={checkbox.id}
                        checked={checkbox.checked}
                        readOnly // Запрещаем изменение состояния чекбоксов пользователем
                    />
                    <label htmlFor={checkbox.id}>{checkbox.label}</label>
                </li>
            ))}
        </ul>
        </div>
    );
}


export {CheckboxList};