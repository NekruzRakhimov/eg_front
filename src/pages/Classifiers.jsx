import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/select/MySelect";
import Loader from "../components/UI/Loader/Loader";
import ClassifiersService from "../API/ClassifiersService";

const Classifiers = () => {
    const router = useNavigate();
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [classifiers, setClassifiers] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [fetchClassifiers, isClassifiersLoading, ClassifiersError] = useFetching(
        async (limit, page, query, sort) => {
            const response = await ClassifiersService.getAll(limit, page, query, sort);
            console.log(response.data)
            setClassifiers(response.data)

        })


    useEffect(() => {
        fetchClassifiers(limit, page, filter.query, filter.sort);
    }, [limit, page, filter.query, filter.sort]);


    return (
        <div>
            Классификаторы
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
                    <th>Классификатор</th>
                    <th>Расшифровка</th>
                    {/*<th>Число дочерних элементов</th>*/}
                    <th>Дата создания</th>
                </tr>
                </tbody>
                <tbody>
                {classifiers.map((classifier, index) =>
                    <tr
                        className="table_link"
                        key={index} onClick={() => router(`/classifiers/${classifier.id}/items/${0}`)}>
                        <td>{classifier.id}</td>
                        <td>{classifier.name}</td>
                        <td>{classifier.full_name}</td>
                        <td>{classifier.created_at}</td>
                    </tr>
                )}

                </tbody>
            </table>
            {isClassifiersLoading &&
                <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
            }
        </div>
    );
};

export default Classifiers;