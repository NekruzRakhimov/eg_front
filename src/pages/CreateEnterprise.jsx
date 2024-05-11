import React from 'react';
import EnterpriseForm from "../components/EnterpriseForm";

const CreateEnterprise = () => {
    return (
        <div className='create-enterprise-container'>
            <h3 style={{"textAlign": "center"}}>Создание предприятия</h3>
            <EnterpriseForm/>
        </div>
    );
};

export default CreateEnterprise;