import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import EnterprisesService from "../API/EnterprisesService";
import Loader from "../components/UI/Loader/Loader";
import EnterprisesFilter from "../components/EnterprisesFilter";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/select/MySelect";
import {queries} from "@testing-library/react";
import {useNavigate} from "react-router-dom";

const Enterprises = () => {
    // const limit = 10;
    // const page = 1;
    const router = useNavigate();
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [enterprises, setEnterprises] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    // let enterprises = []
    const [fetchEnterprises, isEnterprisesLoading, enterprisesError] = useFetching(async (limit, page, query, sort) => {
        const response = await EnterprisesService.getAll(limit, page, query, sort);
        console.log(response.data)
        setEnterprises(response.data)
        // enterprises = response.data

        // setPosts([...posts, ...response.data,])
        // const totalCount = response.headers["x-total-count"]
        // setTotalPages(getPageCount(totalCount, limit))
    })


    useEffect(() => {
        fetchEnterprises(limit, page, filter.query, filter.sort);
    }, [limit, page, filter.query, filter.sort]);

    return (
        <div>
            Список предприятий
            <div>
                <MyInput
                    placeholder={"Поиск..."}
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                />
                <MySelect
                    value={filter.sort}
                    onChane={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue={"Сортировка"}
                    options={[
                        {value: "id", name: "По идентификатору"},
                        {value: "name", name: "По названию"},
                        {value: "authorized_capital", name: "По размеру уставного капитала"}
                    ]}
                />
                <span style={{marginLeft: 10, marginRight: 5}}>Кол-во элементов: </span>
                <MySelect
                    value={filter.limit}
                    onChane={selectedLimit => setLimit(selectedLimit)}
                    defaultValue={"Кол-во элементов"}
                    options={[
                        {value: "5", name: "5"},
                        {value: "15", name: "15"},
                        {value: "25", name: "25"},
                        {value: "-1", name: "Все"},
                    ]}
                />
            </div>
            <table className="enterprises__table">
                <tbody>
                <tr className="enterprises__table__headers">
                    <th>№</th>
                    <th>Наименование</th>
                    <th>Форма собственности</th>
                    <th>Основной ОКВЭД</th>
                    <th>ИНН</th>
                    <th>ЕИН</th>
                    <th>Дата регистрации</th>
                    <th>Населенный пункт</th>
                    <th>Размер уставного капитала</th>
                </tr>
                </tbody>
                <tbody>
                {enterprises.map((enterprise, index) =>
                    <tr
                        className="table_link"
                        key={index} onClick={() => router(`/enterprises/${enterprise.id}`)}>
                        <td>{enterprise.id}</td>
                        <td>{enterprise.name}</td>
                        <td>{enterprise.ownership_type}</td>
                        <td>{enterprise.okved}</td>
                        <td>{enterprise.inn}</td>
                        <td>{enterprise.ein}</td>
                        <td>{enterprise.registration_date}</td>
                        <td>{enterprise.address}</td>
                        <td>{enterprise.authorized_capital}</td>
                    </tr>
                )}

                </tbody>
            </table>
            {isEnterprisesLoading &&
                <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
            }
        </div>
    );
};

export default Enterprises;