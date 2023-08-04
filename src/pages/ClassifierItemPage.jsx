import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import ClassifiersService from "../API/ClassifiersService";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/select/MySelect";
import Loader from "../components/UI/Loader/Loader";

const ClassifierItemPage = () => {
    const params = useParams()
    const classifierID = params.id
    const itemID = params.item_id
    const router = useNavigate();
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [classifierItems, setClassifierItems] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [fetchClassifierItems, isClassifierItemsLoading, ClassifierItemsError] = useFetching(
        async (limit, page, query, sort) => {
            const response = await ClassifiersService.getClassifierItems(classifierID, itemID, limit, page, query, sort);
            console.log(response.data)
            setClassifierItems(response.data)

        })


    useEffect(() => {
        fetchClassifierItems(classifierID, itemID, limit, page, filter.query, filter.sort);
    }, [limit, page, filter.query, filter.sort, classifierID, itemID]);

    return (
        <div>
            {/*Страница элементов классификатора c ID = {params.id}*/}
            Список классификаторов
            {/*<div>*/}
                {/*<MyInput*/}
                {/*    placeholder={"Поиск..."}*/}
                {/*    value={filter.query}*/}
                {/*    onChange={e => setFilter({...filter, query: e.target.value})}*/}
                {/*/>*/}
                {/*<MySelect*/}
                {/*    value={filter.sort}*/}
                {/*    onChane={selectedSort => setFilter({...filter, sort: selectedSort})}*/}
                {/*    defaultValue={"Сортировка"}*/}
                {/*    options={[*/}
                {/*        {value: "id", name: "По идентификатору"},*/}
                {/*        {value: "name", name: "По названию"},*/}
                {/*    ]}*/}
                {/*/>*/}
                {/*<span style={{marginLeft: 10, marginRight: 5}}>Кол-во элементов: </span>*/}
                {/*<MySelect*/}
                {/*    value={filter.limit}*/}
                {/*    onChane={selectedLimit => setLimit(selectedLimit)}*/}
                {/*    defaultValue={"Кол-во элементов"}*/}
                {/*    options={[*/}
                {/*        {value: "5", name: "5"},*/}
                {/*        {value: "15", name: "15"},*/}
                {/*        {value: "25", name: "25"},*/}
                {/*        {value: "-1", name: "Все"},*/}
                {/*    ]}*/}
                {/*/>*/}
            {/*</div>*/}
            <table className="enterprises__table">
                <tbody>
                <tr className="enterprises__table__headers">
                    <th>№</th>
                    <th>Классификатор</th>
                    <th>Код</th>
                    <th>Расшифровка</th>
                    {/*<th>Число дочерних элементов</th>*/}
                    <th>Дата создания</th>
                </tr>
                </tbody>
                <tbody>
                {classifierItems.map((classifierItem, index) =>
                    <tr
                        className="table_link"
                        key={index} onClick={() => router(`/classifiers/${classifierID}/items/${classifierItem.id}`)}>
                        <td>{classifierItem.id}</td>
                        <td>{classifierItem.name}</td>
                        <td>{classifierItem.code}</td>
                        <td>{classifierItem.full_name}</td>
                        <td>{classifierItem.created_at}</td>
                    </tr>
                )}

                </tbody>
            </table>
            {isClassifierItemsLoading &&
                <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
            }
        </div>
    );
};

export default ClassifierItemPage;