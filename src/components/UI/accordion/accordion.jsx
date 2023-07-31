import React from 'react';
import style from "./accordion.module.css"
const Accordion = (props) => {
    const [open, setOpen] = React.useState(props.isOpen)

    React.useEffect(() => {
        setOpen(props.isOpen)
    }, [props.isOpen])

    const emit_onToggle = () => {
        if (typeof props.onChange == 'function') props.onChange(!open)
    }

    return (
        <div className="accordion">
            <div className="accordion-header">
                <div className="accordion-header-text" onClick={emit_onToggle}>
                    {props.header}
                </div>
                <div className="accordion-header-sign">
                    {open ? ">" : "V"}
                </div>

            </div>
            {
                open && <div className="accordion-content">
                    {props.children}
                </div>
            }
        </div>
    );
};

export default Accordion;