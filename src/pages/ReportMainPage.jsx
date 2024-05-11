import React from 'react';
import {useParams} from "react-router-dom";

const ReportMainPage = () => {
    const params = useParams()
    return (
        <div>
            ${params.type}
        </div>
    );
};

export default ReportMainPage;