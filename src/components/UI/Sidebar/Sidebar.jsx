import React, {useState} from 'react';
import classes from "./Sidebar.module.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import Accordion from "../accordion/accordion";

const Sidebar = () => {
    const router = useNavigate();
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
                        <div className={classes.sidebar__reports_item}
                             onClick={() => router(`/reports/technical_economic`)}>Технико-экономический
                        </div>
                        <div className={classes.sidebar__reports_item}
                            onClick={() => router(`/reports/scientific_technical`)}>Научно-технический
                        </div>
                        <div className={classes.sidebar__reports_item}
                            onClick={() => router(`/reports/social_economic`)}>Социально-экономический
                        </div>
                        <div className={classes.sidebar__reports_item}
                            onClick={() => router(`/reports/natural_natural`)}>Естественно-природный
                        </div>
                        <div className={classes.sidebar__reports_item}
                            onClick={() => router(`/reports/foreign_economic`)}>Внешне-экономический
                        </div>
                    </Accordion>
                </li>
                {/*</Link>*/}
            </ul>
        </div>
    );
};

export default Sidebar;