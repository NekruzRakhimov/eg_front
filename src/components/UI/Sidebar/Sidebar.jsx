import React from 'react';
import classes from "./Sidebar.module.css"
import {Link} from "react-router-dom";

const Sidebar = () => {
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
                <Link to="/reports">
                    <li className={classes.sidebar__item}>
                        Отчеты
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;