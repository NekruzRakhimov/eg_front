import React from 'react';
import TabBar, {Tab} from "../components/UI/TabBar/TabBar";

const tabs = [
    {aKey: "1", title: "Ключевые показатели", content: "hgflj;kdshs;fhj;fghlj;fh;fsfsafhs"},
    {aKey: "2", title: "Сравнение и прогнозирование", content: "hgflj;kdshs;fhj;fghlj;fh;fsfsafhs"},
    {aKey: "3", title: "Список стандартных отчетов", content: "hgflj;kdshs;fhj;fghlj;fh;fsfsafhs"},
    {aKey: "4", title: "Конструктор", content: "hgflj;kdshs;fhj;fghlj;fh;fsfsafhs"}
]

const ReportIndustrialActivityObjects = () => {
    return (
        <div>
            Объекты промышленной деятельности
            <TabBar activeKey="1">
                {tabs.map(item => <Tab key={item.aKey} aKey={item.aKey} title={item.title}>{item.content}</Tab>)}
            </TabBar>
        </div>
    );
};

export default ReportIndustrialActivityObjects;