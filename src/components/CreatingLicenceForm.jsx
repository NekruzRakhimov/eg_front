import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import ClassifiersService from "../API/ClassifiersService";
import EnterprisesService from "../API/EnterprisesService";
import LicencesService from "../API/LicencesService";
import MyInput from "./UI/input/MyInput";

const CreatingLicenceForm = ({enterprise}) => {
    const [series, setSeries] = useState('');
    const [valid_until, setValid_until] = useState('');
    const [issued_to, setIssued_to] = useState(enterprise.name);
    // const [activity_type, setActivity_type] = useState('');
    const [selectedOkved, setSelectedOkved] = useState({id: 0, full_name: "выберите классификатор"});
    const [licensee_legal_address, setLicensee_legal_address] = useState('');
    const [issued_at, setIssued_at] = useState('');
    const [commission_protocol_number, setCommission_protocol_number] = useState('');
    const [register_number, setRegister_number] = useState('');

    const [okvedList, setOkvedList] = useState([]);
    const [fetchClassifierOkvedItems, isClassifierOkvedItemsLoading, ClassifierOkvedItemsError] = useFetching(
        async () => {
            const response = await ClassifiersService.getClassifierAllItems(3)
            console.log(response.data)

            setOkvedList(response.data)
        })


    useEffect(() => {
        fetchClassifierOkvedItems();
    }, []);

    const handleOkvedSelectChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOkvedItem = okvedList[selectedIndex];
        setSelectedOkved(selectedOkvedItem);
    };

    const [createLicence, iscreateLicenceLoading, createLicenceError] = useFetching(
        async (enterpriseID, formData) => {
            const response = await LicencesService.Create(enterpriseID, formData)
            console.log(response.data)
        })

    const handleSubmit = (e) => {
        e.preventDefault();
        // Создаем объект с данными формы
        const formData = {
            series: series,
            valid_until: valid_until,
            issued_to: issued_to,
            activity_type: selectedOkved.full_name,
            licensee_legal_address: licensee_legal_address,
            issued_at: issued_at,
            commission_protocol_number: commission_protocol_number,
            register_number: register_number,
        };

        console.log("before")
        createLicence(enterprise.id, formData)
        console.log("after")
        window.location.href = `/enterprises/${enterprise.id}`;
    };

    return (
        <form onSubmit={handleSubmit} className="create-licence-form">
            Серия лицензии:
            <MyInput
                type="text"
                placeholder="Серия лицензии"
                value={series}
                onChange={(e) => setSeries(e.target.value)}
            />
            Действительна до:
            <MyInput
                type="date"
                placeholder="Действительна до"
                value={valid_until}
                onChange={(e) => setValid_until(e.target.value)}
            />
            Кому выдана:
            <MyInput
                type="text"
                placeholder="Кому выдана"
                value={issued_to}
                onChange={(e) => setIssued_to(e.target.value)}
            />
            Вид деятельности и работ:
            <select value={selectedOkved.full_name}  onChange={handleOkvedSelectChange}>
                {okvedList.map((okvedItem, index) =>
                    <option key={okvedItem.id}>{okvedItem.full_name}</option>
                )}
            </select>
            Юридический адрес лицензиата:
            <MyInput
                type="text"
                placeholder="Юридический адрес лицензиата"
                value={licensee_legal_address}
                onChange={(e) => setLicensee_legal_address(e.target.value)}
            />
            Дата выдачи лицензии:
            <MyInput
                type="date"
                placeholder="Дата выдачи лицензии"
                value={issued_at}
                onChange={(e) => setIssued_at(e.target.value)}
            />
            № Протокола комиссии:
            <MyInput
                type="text"
                placeholder="№ Протокола комиссии"
                value={commission_protocol_number}
                onChange={(e) => setCommission_protocol_number(e.target.value)}
            />
            № Реестра
            <MyInput
                type="text"
                placeholder="№ Реестра"
                value={register_number}
                onChange={(e) => setRegister_number(e.target.value)}
            />
            <button type="submit" className="create-licence-form-btn">Отправить</button>
        </form>
    );
};

export default CreatingLicenceForm;