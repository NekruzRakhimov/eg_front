import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

const TabBarNav = ({navLabel, className, onChangeActiveTab}) => {
    const classes = classNames(
        "nav-item",
        className
    );

    return (
        <button className={classes}
                onClick = { () => {onChangeActiveTab(navLabel); }}
        >
            {navLabel}
        </button>
    );
};

TabBarNav.prototypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func
}

TabBarNav.defaultProps = {
    navLabel: "tab",
    className: "",
    onChangeActiveTab: () => {}
}

export default TabBarNav;