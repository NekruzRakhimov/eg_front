import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import EnterprisesService from "../API/EnterprisesService";
import ClassifiersService from "../API/ClassifiersService";

const EnterpriseForm = () => {

    const [name, setName] = useState('');
    const [inn, setInn] = useState('');
    const [ein, setEin] = useState('');
    const [okved, setOkved] = useState('');
    const [okvedList, setOkvedList] = useState([]);
    const [selectedOkved, setSelectedOkved] = useState({id: 0, full_name: "выберите классификатор"});
    const [kfc, setKfc] = useState('');
    const [kfcList, setKfcList] = useState([]);
    const [selectedKfc, setSelectedKfc] = useState({id: 0, full_name: "выберите классификатор"});
    const [registrationDate, setRegistrationDate] = useState('');
    const [address, setAddress] = useState('');
    const [authorizedCapital, setAuthorizedCapital] = useState('');

    const [fetchClassifierOkved, isClassifierOkvedLoading, ClassifierOkvedError] = useFetching(
        async () => {
            const response = await ClassifiersService.getClassifierAllItems(3)
            console.log(response.data)
            setOkved(response.data)
            console.log(okved)
        })


    useEffect(() => {
        fetchClassifierOkved();
    }, []);

     const [fetchClassifierOkvedItems, isClassifierOkvedItemsLoading, ClassifierOkvedItemsError] = useFetching(
         async () => {
             const response = await ClassifiersService.getClassifierAllItems(3)
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

            setKfc(response.data)
            console.log(kfc)
        })


    useEffect(() => {
        fetchClassifierKfc();
    }, []);

    const [fetchClassifierKfcItems, isClassifierKfcItemsLoading, ClassifierKfcItemsError] = useFetching(
        async () => {

            const response = await ClassifiersService.getClassifierItems(6, 0)
            console.log(response.data)

            setKfcList(response.data)
            console.log(kfcList)
        })


    useEffect(() => {
        fetchClassifierKfcItems();
    }, []);


    const [createEnterprise, isCreateEnterpriseLoading, createEnterpriseError] = useFetching(
        async (formData) => {
            const response = await EnterprisesService.Create(formData)
            console.log(response.data)
        })

    const handleOkvedSelectChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOkvedItem = okvedList[selectedIndex];
        setSelectedOkved(selectedOkvedItem);
    };

    const handleKfcSelectChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedKfcItem = kfcList[selectedIndex];
        setSelectedKfc(selectedKfcItem);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedKfc)
        console.log(selectedOkved)
        // Создаем объект с данными формы
        const formData = {
            name: name,
            inn: inn,
            ein: ein,
            ownership_type: selectedKfc.full_name,
            okved: selectedOkved.full_name,
            okved_id: selectedOkved.id,
            kfc_id: selectedKfc.id,
            registration_date: registrationDate,
            address: address,
            authorized_capital: Number(authorizedCapital)
        };

        createEnterprise(formData)
        window.location.href = "/enterprises";
    };

    return (
        <form onSubmit={handleSubmit} className="create-enterprise-form">
            <input
                type="text"
                placeholder="Название предприятия"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="ЕИН"
                value={ein}
                onChange={(e) => setEin(e.target.value)}
            />
            <input
                type="text"
                placeholder="ИНН"
                value={inn}
                onChange={(e) => setInn(e.target.value)}
            />
            <select value={selectedKfc.full_name} onChange={handleKfcSelectChange}>
                {kfcList.map((kfcItem, index) =>
                    <option key={kfcItem.id}>{kfcItem.full_name}</option>
                )}
            </select>
            <select value={selectedOkved.full_name}  onChange={handleOkvedSelectChange}>
                {okvedList.map((okvedItem, index) =>
                        <option key={okvedItem.id}>{okvedItem.full_name}</option>
                )}
            </select>
            <input
                type="date"
                placeholder="Дата регистрации"
                value={registrationDate}
                onChange={(e) => setRegistrationDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Адрес"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                type="number"
                placeholder="Капитал"
                value={authorizedCapital}
                onChange={(e) => setAuthorizedCapital(e.target.value)}
            />
            <button type="submit" className="create-enterprise-form-btn">Отправить</button>
        </form>
    );
};

export default EnterpriseForm;