import React from 'react';

const TextField = (props) => {
    return (
        <div>
            <h4 className={"TextLabel"}>{props.label}</h4>
            <input
                type={'text'}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
};

export default TextField;