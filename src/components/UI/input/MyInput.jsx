import React from 'react';
import classes from "../input/MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} {...props} className={classes.myInput}/>
        </div>
    );
});

export default MyInput;