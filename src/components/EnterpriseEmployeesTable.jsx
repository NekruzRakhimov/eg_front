import React from 'react';
import {useNavigate} from "react-router-dom";

const EnterpriseEmployeesTable = ({employees}) => {
    console.log(employees)
    const router = useNavigate();
    return (
        <div>
            Список cотрудников
            <table className="enterprises__table">
                <tbody>
                <tr className="enterprises__table__headers">
                    <th>№</th>
                    <th>ФИО</th>
                    <th>ИНН</th>
                    <th>Должность</th>
                    <th>Дата рождения</th>
                    <th>Стаж работы</th>
                </tr>
                </tbody>
                <tbody>
                {employees.map((employee, index) =>
                    <tr
                        className="table_link"
                        key={employee.id} onClick={() => router(`/employees/${employee.id}`)}>
                        <td>{employee.id}</td>
                        <td>{employee.full_name}</td>
                        <td>{employee.inn}</td>
                        <td>{employee.job_title}</td>
                        <td>{employee.birth_date}</td>
                        <td>{employee.work_experience}</td>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    );
};

export default EnterpriseEmployeesTable;