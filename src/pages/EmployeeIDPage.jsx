import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import EmployeesService from "../API/EmployeesService";

const EmployeeIdPage = () => {
    const params = useParams()
    const [employee, setEmployee] = useState({});
    const [fetchEmployeeByID, isLoading, error] = useFetching(async (id) => {
        const response = await EmployeesService.getByID(params.id)
        setEmployee(response.data)
        console.log(employee)
    })

    useEffect(() => {
        fetchEmployeeByID(params.id)
    }, []);

    return (
        <div>
            <h3 style={{"margin": "10px"}}>{employee.full_name}</h3>
            {isLoading
                ? <Loader/>
                : <div>
                    <div className="enterprise_id_page_main">
                        <div className="enterprise_id_page_main_item">
                            <h2 style={{"marginBottom": 10}}>Основная информация</h2>
                            <div><b>ID:</b> {employee.id}</div>
                            <div><b>ФИО:</b> {employee.full_name}</div>
                            <div><b>Пол:</b> {employee.gender}</div>
                            <div><b>Дата рождения:</b> {employee.birth_date}</div>
                            <div><b>Страна рождения:</b> {employee.inn}</div>
                            <div><b>Город, где родился:</b> {employee.birth_city}</div>
                            <div><b>Национальность:</b> {employee.nationality}</div>
                            <div><b>Гражданство:</b> {employee.citizenship}</div>
                            <div><b>Резидент/нерезидент:</b> {employee.is_resident}</div>
                            <div><b>Семейное положение:</b> {employee.marital_status}</div>
                            <div><b>Паспортные данные:</b> (пусто)</div>
                            <div><b>Скрин паспорта (формата .jpg, .pdf):</b> (пусто)</div>
                            <div><b>ИНН сотрудника:</b> {employee.inn}</div>
                            <div><b>Рабочий телефон:</b> {employee.work_phone}</div>
                            <div><b>Мобильный телефон:</b> {employee.mobile_phone}</div>
                            <div><b>Электронная почта:</b> {employee.email}</div>
                            <div><b>Школа, которую окончил:</b> {employee.graduated_school}</div>
                            <div><b>Год окончания школы:</b> {employee.school_graduating_year}</div>
                            <div><b>Высшее учебное заведение или средне-профессиональные учреждения, которое
                                окончил:</b> {employee.graduated_university}</div>
                            <div><b>Год окончания учебы в ВУЗе или профессиональном
                                учреждении:</b> {employee.graduated_university_year}</div>
                            <div><b>Полученная специальность:</b> {employee.speciality}</div>
                            <div><b>Полученный тип образования:</b> {employee.education_type}</div>
                            <div><b>Курсы повышения квалификации:</b> (пусто)</div>
                            <div><b>Обучение в магистратуре, аспирантуре и докторантуре:</b> (пусто)</div>
                            <div><b>Трудовая деятельность в хронологии:</b> (пусто)</div>
                            <div><b>Опыт в государственной службе:</b> {employee.gov_work_experience}</div>
                            <div><b>Знание иностранных языков:</b> (пусто)</div>
                            <div><b>Наличие государственных наград:</b> (пусто)</div>
                            <div><b>Является депутатом Маджлиса народных депутатов:</b> {employee.is_deputy}</div>
                            <div><b>Действующий сотрудник:</b> {employee.is_active_employee}</div>
                            <div><b>Принят в список кадровых резервов:</b> (пусто)</div>
                            <div><b>Автобиография:</b> {employee.biography}</div>
                            <div><b>Признак ключевого сотрудника:</b> {employee.is_key_employee}</div>
                            <div><b>Признак участия в проектах:</b> {employee.participate_in_projects}</div>
                            <div><b>Подразделение:</b> {employee.subdivision}</div>
                            <div><b>Должность:</b> {employee.job_title}</div>
                            <div><b>Признак временного сотрудника (стажер):</b> {employee.is_temp_employee}</div>
                            <div><b>Дата начала вступления в должность:</b> {employee.position_entry_date}</div>
                            <div><b>Дата увольнения с должности:</b> {employee.position_dismissal_date}</div>
                            <div><b>Сертификат сотрудника:</b> (пусто)</div>
                            <div><b>Заработная плата:</b> {employee.salary}</div>
                            <div><b>Опыт работы(в годах):</b> {employee.work_experience}</div>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default EmployeeIdPage;