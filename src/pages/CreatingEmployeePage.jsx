import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import {useFetching} from "../hooks/useFetching";
import EmployeesService from "../API/EmployeesService";

const CreatingEmployeePage = () => {
    const [employee, setEmployee] = useState({
        full_name: "",
        inn: "",
        gender: "",
        birth_date: "",
        birth_country: "",
        birth_city: "",
        nationality: "",
        citizenship: "",
        is_resident: "",
        marital_status: "холостяк / не замужем",
        work_phone: "",
        mobile_phone: "",
        email: "",
        graduated_school: "",
        school_graduating_year: "",
        graduated_university: "",
        graduated_university_year: "",
        speciality: "",
        education_type: "",
        gov_work_experience: "",
        is_deputy: "",
        is_active_employee: "",
        biography: "",
        is_key_employee: "",
        participate_in_projects: "",
        subdivision: "",
        job_title: "",
        is_temp_employee: "",
        position_entry_date: "",
        position_dismissal_date: "",
        salary: "",
        work_experience: ""

    })
    const params = useParams()
    // eslint-disable-next-line no-unused-vars
    const [createEmployee, isCreateEmployee, createEmployeeError] = useFetching(
        async (enterpriseID, formData) => {
            const response = await EmployeesService.Create(enterpriseID, formData)
            console.log(response.data)
        })

    const handleSubmit = (e) => {
        e.preventDefault();
        // Создаем объект с данными формы
        const formData = {
            full_name: employee.full_name,
            inn: employee.inn,
            gender: employee.gender,
            birth_date: employee.birth_date,
            birth_country: employee.birth_country,
            birth_city: employee.birth_city,
            nationality: employee.nationality,
            citizenship: employee.citizenship,
            is_resident: employee.is_resident,
            marital_status: employee.marital_status,
            work_phone: employee.work_phone,
            mobile_phone: employee.mobile_phone,
            email: employee.email,
            graduated_school: employee.graduated_school,
            school_graduating_year: employee.school_graduating_year,
            graduated_university: employee.graduated_university,
            graduated_university_year: employee.graduated_university_year,
            speciality: employee.speciality,
            education_type: employee.education_type,
            gov_work_experience: employee.gov_work_experience,
            is_deputy: employee.is_deputy,
            is_active_employee: employee.is_active_employee,
            biography: employee.biography,
            is_key_employee: employee.is_key_employee,
            participate_in_projects: employee.participate_in_projects,
            subdivision: employee.subdivision,
            job_title: employee.job_title,
            is_temp_employee: employee.is_temp_employee,
            position_entry_date: employee.position_entry_date,
            position_dismissal_date: employee.position_dismissal_date,
            salary: Number(employee.salary),
            work_experience: employee.work_experience
        };

        console.log(formData)
        createEmployee(params.id, formData)
        window.location.href = `/enterprises/${params.id}`;
    };
    return (
        <div className="create-employee-container">
            <h2 style={{"textAlign": "center", marginBottom: "20px"}}>Создание сотрудника</h2>
            <form onSubmit={handleSubmit} className="create-employee-form">
                <div className="create-employee-form-fields-title"> ФИО сотрудника:</div>
                <MyInput
                    type="text"
                    placeholder="ФИО"
                    value={employee.full_name}
                    onChange={(e) => setEmployee({...employee, full_name: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> ИНН сотрудника:</div>
                <MyInput
                    type="text"
                    placeholder="ИНН"
                    value={employee.inn}
                    onChange={(e) => setEmployee({...employee, inn: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Пол:</div>
                <div className="create-employee-radio-option">
                    <input
                        type="radio"
                        id="male"
                        value={"Мужской"}
                        name={"gender"}
                        onChange={() => setEmployee({...employee, gender: "Мужской"})}
                    />
                    <label style={{marginLeft: "10px"}}  htmlFor="male">Мужской</label><br/>
                </div>
                <div className="create-employee-radio-option">
                    <input
                        className="create-employee-radio"
                        type="radio"
                        id="female"
                        value={"Женский"}
                        name={"gender"}
                        onChange={() => setEmployee({...employee, gender: "Женский"})}
                    />
                    <label style={{marginLeft: "10px"}} htmlFor="female">Женский</label><br/>
                </div>
                <div className="create-employee-form-fields-title"> Дата рождения:</div>
                <MyInput
                    type="date"
                    placeholder="Дата рождения"
                    value={employee.birth_date}
                    onChange={(e) => setEmployee({...employee, birth_date: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Страна рождения:</div>
                <MyInput
                    type="text"
                    placeholder="Страна рождения"
                    value={employee.birth_country}
                    onChange={(e) => setEmployee({...employee, birth_country: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Город, где родился:</div>
                <MyInput
                    type="text"
                    placeholder="Город, где родился"
                    value={employee.birth_city}
                    onChange={(e) => setEmployee({...employee, birth_city: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Национальность:</div>
                <MyInput
                    type="text"
                    placeholder="Национальность"
                    value={employee.nationality}
                    onChange={(e) => setEmployee({...employee, nationality: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Гражданство:</div>
                <MyInput
                    type="text"
                    placeholder="Гражданство"
                    value={employee.citizenship}
                    onChange={(e) => setEmployee({...employee, citizenship: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Резидент/нерезидент:</div>
                <div className="create-employee-radio-option">
                    <input
                        type="radio"
                        id="resident"
                        value={"Да"}
                        name={"residence"}
                        onChange={() => setEmployee({...employee, is_resident: "Да"})}
                    />
                    <label style={{marginLeft: "10px"}}  htmlFor="resident">Да</label>
                </div>
                <div className="create-employee-radio-option">
                    <input
                        className="create-employee-radio"
                        type="radio"
                        id="is_not_resident"
                        value={"Нет"}
                        name={"residence"}
                        onChange={() => setEmployee({...employee, is_resident: "Нет"})}
                    />
                    <label style={{marginLeft: "10px"}} htmlFor="is_not_resident">Нет</label>
                </div>
                <div className="create-employee-form-fields-title"> Семейное положение:</div>
                <select value={employee.marital_status}
                        onChange={(e) => setEmployee({...employee, marital_status: e.target.value})}>
                        <option key={0}>холостяк / не замужем</option>
                        <option key={1}>замужем / женат</option>
                        <option key={2}>разведен / разведена</option>
                        <option key={3}>вдовец / вдова</option>
                </select>
                <div className="create-employee-form-fields-title"> Рабочий телефон:</div>
                <MyInput
                    type="text"
                    placeholder="Рабочий телефон"
                    value={employee.work_phone}
                    onChange={(e) => setEmployee({...employee, work_phone: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Мобильный телефон:</div>
                <MyInput
                    type="text"
                    placeholder="Мобильный телефон"
                    value={employee.mobile_phone}
                    onChange={(e) => setEmployee({...employee, mobile_phone: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Электронная почта:</div>
                <MyInput
                    type="email"
                    placeholder="Электронная почта"
                    value={employee.email}
                    onChange={(e) => setEmployee({...employee, email: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Школа, которую окончил:</div>
                <MyInput
                    type="text"
                    placeholder="Школа, которую окончил"
                    value={employee.graduated_school}
                    onChange={(e) => setEmployee({...employee, graduated_school: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Год окончания школы:</div>
                <MyInput
                    type="date"
                    placeholder="Год окончания школы"
                    value={employee.school_graduating_year}
                    onChange={(e) => setEmployee({...employee, school_graduating_year: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Высшее учебное заведение или средне-профессиональные учреждения, которое окончил:</div>
                <MyInput
                    type="text"
                    placeholder="Учебное заведение"
                    value={employee.graduated_university}
                    onChange={(e) => setEmployee({...employee, graduated_university: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Год окончания учебы в ВУЗе или профессиональном учреждении:</div>
                <MyInput
                    type="date"
                    placeholder="Год окончания учебы в ВУЗе или профессиональном учреждении"
                    value={employee.graduated_university_year}
                    onChange={(e) => setEmployee({...employee, graduated_university_year: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Полученная специальность:</div>
                <MyInput
                    type="text"
                    placeholder="Полученная специальность"
                    value={employee.speciality}
                    onChange={(e) => setEmployee({...employee, speciality: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Полученный тип образования:</div>
                <select value={employee.education_type}
                        onChange={(e) => setEmployee({...employee, education_type: e.target.value})}>
                    <option key={0}>Среднее профессиональное</option>
                    <option key={1}>Высшее I степени — бакалавриат</option>
                    <option key={2}>Высшее II степени — специалитет, магистратура</option>
                    <option key={3}>Высшее III степени — подготовка кадров высшей квалификации</option>
                </select>
                <div className="create-employee-form-fields-title"> Опыт в государственной службе:</div>
                <div className="create-employee-radio-option">
                    <input
                        type="radio"
                        id="gov_work_experience_yes"
                        value={"Да"}
                        name={"gov_work_experience"}
                        onChange={() => setEmployee({...employee, gov_work_experience: "Да"})}
                    />
                    <label style={{marginLeft: "10px"}}  htmlFor="gov_work_experience_yes">Да</label>
                </div>
                <div className="create-employee-radio-option">
                    <input
                        className="create-employee-radio"
                        type="radio"
                        id="gov_work_experience_no"
                        value={"Нет"}
                        name={"gov_work_experience"}
                        onChange={() => setEmployee({...employee, gov_work_experience: "Нет"})}
                    />
                    <label style={{marginLeft: "10px"}} htmlFor="gov_work_experience_no">Нет</label>
                </div>
                <div className="create-employee-form-fields-title"> Является депутатом Маджлиса народных депутатов:</div>
                <div className="create-employee-radio-option">
                    <input
                        type="radio"
                        id="deputy"
                        value={"Да"}
                        name={"is_deputy"}
                        onChange={() => setEmployee({...employee, is_deputy: "Да"})}
                    />
                    <label style={{marginLeft: "10px"}}  htmlFor="deputy">Да</label>
                </div>
                <div className="create-employee-radio-option">
                    <input
                        className="create-employee-radio"
                        type="radio"
                        id="is_not_deputy"
                        value={"Нет"}
                        name={"is_deputy"}
                        onChange={() => setEmployee({...employee, is_deputy: "Нет"})}
                    />
                    <label style={{marginLeft: "10px"}} htmlFor="is_not_deputy">Нет</label>
                </div>
                <div className="create-employee-form-fields-title"> Действующий сотрудник:</div>
                <div className="create-employee-radio-option">
                    <input
                        type="radio"
                        id="active_employee"
                        value={"Да"}
                        name={"is_active_employee"}
                        onChange={() => setEmployee({...employee, is_active_employee: "Да"})}
                    />
                    <label style={{marginLeft: "10px"}}  htmlFor="active_employee">Да</label>
                </div>
                <div className="create-employee-radio-option">
                    <input
                        className="create-employee-radio"
                        type="radio"
                        id="is_not_active_employee"
                        value={"Нет"}
                        name={"is_active_employee"}
                        onChange={() => setEmployee({...employee, is_active_employee: "Нет"})}
                    />
                    <label style={{marginLeft: "10px"}} htmlFor="is_not_active_employee">Нет</label>
                </div>
                <div className="create-employee-form-fields-title"> Автобиография:</div>
                <textarea
                    placeholder="Автобиография"
                    value={employee.biography}
                    onChange={(e) => setEmployee({...employee, biography: e.target.value})}>
                </textarea>
                <div className="create-employee-form-fields-title"> Признак ключевого сотрудника:</div>
                <div className="create-employee-radio-option">
                    <input
                        type="radio"
                        id="key_employee"
                        value={"Да"}
                        name={"is_key_employee"}
                        onChange={() => setEmployee({...employee, is_key_employee: "Да"})}
                    />
                    <label style={{marginLeft: "10px"}}  htmlFor="key_employee">Да</label>
                </div>
                <div className="create-employee-radio-option">
                    <input
                        className="create-employee-radio"
                        type="radio"
                        id="is_not_key_employee"
                        value={"Нет"}
                        name={"is_key_employee"}
                        onChange={() => setEmployee({...employee, is_key_employee: "Нет"})}
                    />
                    <label style={{marginLeft: "10px"}} htmlFor="is_not_key_employee">Нет</label>
                </div>
                <div className="create-employee-form-fields-title"> Признак участия в проектах:</div>
                <div className="create-employee-radio-option">
                    <input
                        type="radio"
                        id="participate_in_projects"
                        value={"Да"}
                        name={"participate_in_projects"}
                        onChange={() => setEmployee({...employee, participate_in_projects: "Да"})}
                    />
                    <label style={{marginLeft: "10px"}}  htmlFor="participate_in_projects">Да</label>
                </div>
                <div className="create-employee-radio-option">
                    <input
                        className="create-employee-radio"
                        type="radio"
                        id="do_not_participate_in_projects"
                        value={"Нет"}
                        name={"participate_in_projects"}
                        onChange={() => setEmployee({...employee, participate_in_projects: "Нет"})}
                    />
                    <label style={{marginLeft: "10px"}} htmlFor="do_not_participate_in_projects">Нет</label>
                </div>
                <div className="create-employee-form-fields-title"> Подразделение:</div>
                <MyInput
                    type="text"
                    placeholder="Подразделение"
                    value={employee.subdivision}
                    onChange={(e) => setEmployee({...employee, subdivision: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Должность:</div>
                <MyInput
                    type="text"
                    placeholder="Должность"
                    value={employee.job_title}
                    onChange={(e) => setEmployee({...employee, job_title: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Признак временного сотрудника (стажер):</div>
                <div className="create-employee-radio-option">
                    <input
                        type="radio"
                        id="temp_employee"
                        value={"Да"}
                        name={"is_temp_employee"}
                        onChange={() => setEmployee({...employee, is_temp_employee: "Да"})}
                    />
                    <label style={{marginLeft: "10px"}}  htmlFor="temp_employee">Да</label>
                </div>
                <div className="create-employee-radio-option">
                    <input
                        className="create-employee-radio"
                        type="radio"
                        id="is_not_temp_employee"
                        value={"Нет"}
                        name={"is_temp_employee"}
                        onChange={() => setEmployee({...employee, is_temp_employee: "Нет"})}
                    />
                    <label style={{marginLeft: "10px"}} htmlFor="is_temp_employee">Нет</label>
                </div>
                <div className="create-employee-form-fields-title"> Дата начала вступления в должность:</div>
                <MyInput
                    type="date"
                    placeholder="Дата начала вступления в должность"
                    value={employee.position_entry_date}
                    onChange={(e) => setEmployee({...employee, position_entry_date: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Дата увольнения с должности:</div>
                <MyInput
                    type="date"
                    placeholder="Дата увольнения с должности"
                    value={employee.position_dismissal_date}
                    onChange={(e) => setEmployee({...employee, position_dismissal_date: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Заработная плата:</div>
                <MyInput
                    type="number"
                    placeholder="Заработная плата"
                    value={employee.salary}
                    onChange={(e) => setEmployee({...employee, salary: e.target.value})}
                />
                <div className="create-employee-form-fields-title"> Опыт работы(в годах):</div>
                <MyInput
                    type="number"
                    placeholder="Опыт работы(в годах)"
                    value={employee.work_experience}
                    onChange={(e) => setEmployee({...employee, work_experience: e.target.value})}
                />
                <button type="submit" className="create-licence-form-btn">Отправить</button>
            </form>
        </div>
    );
};

export default CreatingEmployeePage;