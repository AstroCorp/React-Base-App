import React from 'react';
import { Link } from "react-router-dom";

const NoMatch = (props: any) => (
    <div>
        <h1>Error 404</h1>
        <Link className="text-purple-700" to="/">Ir al inicio</Link>
    </div>
);

export default NoMatch;