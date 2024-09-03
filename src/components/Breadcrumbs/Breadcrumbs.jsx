import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="space-x-1 container">
            
            <Link to="/"><span> <i class="fa-solid fa-house"></i></span> Home</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return (
                    <span key={to}>
                        <span> / </span>
                        {index === pathnames.length - 1 ? (
                            <span>{value}</span>
                        ) : (
                            <Link to={to}>{value}</Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
