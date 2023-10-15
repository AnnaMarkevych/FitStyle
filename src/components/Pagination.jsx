import {useState} from "react";
function Pagination ({itemsPerPage, totalItems, paginate}) {
    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (pageNumber) => {
        setActiveButton(pageNumber);
    };

    const totalPages = Math.ceil(totalItems / itemsPerPage); // Replace with your function to calculate the total number of pages

    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
        buttons.push(
            <li key={i}
                className={activeButton === i ? "pagination-button active" : "pagination-button"}
                onClick={() => {
                    handleClick(i);
                    paginate(i);
                }}>
                <a href="#">{i}</a>
            </li>
        );
    }

    return <ul className="pagination">{buttons}</ul>;

}
export {Pagination};