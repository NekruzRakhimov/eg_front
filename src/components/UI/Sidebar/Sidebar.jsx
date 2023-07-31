import React, {useState} from 'react';
import classes from "./Sidebar.module.css"
import {Link, useLocation} from "react-router-dom";
import Accordion from "../accordion/accordion";

const Sidebar = () => {
    const currentPath = useLocation().pathname
    const [open, setOpen] = useState(true)
    return (
        <div className={classes.sidebar}>
            <ul>
                <Link to="/enterprises">
                    <li className={classes.sidebar__item}>
                        Предприятия
                    </li>
                </Link>
                <Link to="/classifiers">
                    <li className={classes.sidebar__item}>
                        Классификаторы
                    </li>
                </Link>
                {/*<Link to="/reports">*/}
                    <li className={classes.sidebar__item}>
                        <Accordion isOpen={open} header="Отчеты" onChange={val => setOpen(val)}>
                           <div>Технический</div>
                           <div>Отчет 2</div>
                           <div>Отчет 3</div>
                        </Accordion>
                    </li>
                {/*</Link>*/}
            </ul>
        </div>
    );
};

export default Sidebar;