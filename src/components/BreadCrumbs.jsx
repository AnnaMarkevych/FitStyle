import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const replaceEncodedSpaces = (inputString) => {
        const result =  inputString.replace(/%20/g, ' ');
        return result;
    };

    return (
        <nav aria-label="breadcrumb" className='nav-breadcrumb'>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link className='link-breadcrumb' to="/">Home</Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <li key={index} className="breadcrumb-item active-last" aria-current="page">
                            {replaceEncodedSpaces(name[0].toUpperCase() + name.slice(1))}
                        </li>
                    ) : (
                        <li key={index} className="breadcrumb-item">
                            <Link className='link-breadcrumb' to={routeTo}>{replaceEncodedSpaces(name[0].toUpperCase() + name.slice(1))}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export {BreadCrumbs};