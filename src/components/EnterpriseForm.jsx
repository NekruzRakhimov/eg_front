import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import EnterprisesService from "../API/EnterprisesService";
import ClassifiersService from "../API/ClassifiersService";

const EnterpriseForm = () => {

    const [name, setName] = useState('');
    const [inn, setInn] = useState('');
    const [ein, setEin] = useState('');
    const [okved, setOkved] = useState('');
    const [okvedList, setOkvedList] = useState('');
    const [kfc, setKfc] = useState('');
    const [kfcList, setKfcList] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [address, setAddress] = useState('');
    const [authorizedCapital, setAuthorizedCapital] = useState('');

    const [fetchClassifierOkved, isClassifierOkvedLoading, ClassifierOkvedError] = useFetching(
        async () => {
            const response = await ClassifiersService.getByCode("okved")
            console.log(response.data)

            setOkvedList(response.data)
        })


    useEffect(() => {
        fetchClassifierOkved();
    }, []);

    const [fetchClassifierOkvedItems, isClassifierOkvedItemsLoading, ClassifierOkvedItemsError] = useFetching(
        async () => {
            const response = await ClassifiersService.getByCode("okved")
            console.log(response.data)

            setOkvedList(response.data)
        })


    useEffect(() => {
        fetchClassifierOkvedItems();
    }, []);

    const [fetchClassifierKfc, isClassifierKfcLoading, ClassifierKfcError] = useFetching(
        async () => {
            const response = await ClassifiersService.getByCode("kfc")
            console.log(response.data)

            setKfcList(response.data)
        })


    useEffect(() => {
        fetchClassifierKfc();
    }, []);


    const [createEnterprise, isCreateEnterprise, createEnterpriseError] = useFetching(
        async (formData) => {
            const response = await EnterprisesService.Create(formData)
            console.log(response.data)
        })

    const handleSubmit = (e) => {
        e.preventDefault();

        // Создаем объект с данными формы
        const formData = {
            name: name,
            inn: inn,
            ein: ein,
            ownership_type: kfc,
            okved: okved,
            registration_date: registrationDate,
            address: address,
            authorized_capital: Number(authorizedCapital)
        };

        createEnterprise(formData)
        //window.location.href = "/enterprises";
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название предприятия"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <input
                type="text"
                placeholder="ЕИН"
                value={ein}
                onChange={(e) => setEin(e.target.value)}
            /><br/>
            <input
                type="text"
                placeholder="ИНН"
                value={inn}
                onChange={(e) => setInn(e.target.value)}
            /><br/>
            <input
                type="text"
                placeholder="ОКВЭД"
                value={okved}
                onChange={(e) => setOkved(e.target.value)}
            /><br/>
            <input
                type="text"
                placeholder="КФС"
                value={kfc}
                onChange={(e) => setKfc(e.target.value)}
            /><br/>
            <input
                type="date"
                placeholder="Дата регистрации"
                value={registrationDate}
                onChange={(e) => setRegistrationDate(e.target.value)}
            /><br/>
            <input
                type="text"
                placeholder="Адрес"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            /><br/>
            <input
                type="number"
                placeholder="Капитал"
                value={authorizedCapital}
                onChange={(e) => setAuthorizedCapital(e.target.value)}
            /><br/>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default EnterpriseForm;