import React, {useState} from 'react';
import PropTypes from "prop-types";

const TabBar = (props) => {
    const [activeTab, setActiveTab] = useState(null)

    // let state = {
    //     activeTab: null,
    // }

    const componentDidMount = () => {
        const {children = []} = props
        const activeTab = getChildrenLabels(children)[0]
        setActiveTab(activeTab)
    }

    const getChildrenLabels = (children) => {
        return children.map(({props}) => props.label);
    }

    // eslint-disable-next-line no-self-compare
    if (activeTab !== activeTab) {
        setActiveTab(activeTab)
    }

    return (
        <div>

        </div>
    );
};

TabBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool
}

TabBar.defaultProps = {
    children: null,
    className: "",
    vertical: false
}

export default TabBar;