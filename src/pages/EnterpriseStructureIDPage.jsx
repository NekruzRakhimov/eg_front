import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import EnterpriseStructureService from "../API/EnterpriseStructureService";
import EnterpriseStructureTabBar from "../components/EnterpriseStructureTabBar";
import {Tab} from "../components/UI/TabBar/TabBar";

const enterpriseStructureTabs = [
    {aKey: "1", title: "Дочерние структуры", content: "1"},
    {aKey: "2", title: "Сотрудники", content: "2"},
]

const EnterpriseStructureIdPage = () => {
    const params = useParams()
    const [structure, setStructure] = useState({});
    const [childStructures, setChildStructures] = useState([]);
    const [fetchStructureByID, isLoading, error] = useFetching(async (enterprise_id, structure_id) => {
        const response = await EnterpriseStructureService.getByID(enterprise_id, structure_id)
        setStructure(response.data.structure)
        setChildStructures(response.data.child_structures)
        console.log("structure", structure)
        console.log("childStructures", childStructures)
    })

    useEffect(() => {
        fetchStructureByID(params.enterprise_id, params.structure_id)
    }, []);

    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div>
                    <div className="enterprise_id_page_main">
                        <div className="enterprise_id_page_main_item">
                            <h2 style={{"marginBottom": 10}}>Основная информация</h2>
                            <div><b>ID: </b> {structure.id}</div>
                            <div><b>Наименовние: </b> {structure.title}</div>
                            <div><b>Описание: </b> {structure.description}</div>
                            <div><b>Дата создания: </b> {structure.created_at}</div>
                        </div>
                    </div>
                    <EnterpriseStructureTabBar
                        activeKey={"1"}
                        structure={childStructures}
                        enterpriseID={params.enterprise_id}
                        tabs={enterpriseStructureTabs}>
                        {enterpriseStructureTabs.map(item => <Tab key={item.aKey} aKey={item.aKey}
                                                         title={item.title}>{item.content}</Tab>)}
                    </EnterpriseStructureTabBar>
                </div>

            }
        </div>
    );
};

export default EnterpriseStructureIdPage;