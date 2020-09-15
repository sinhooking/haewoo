import React from 'react';
import './index.less';
const TitleText = (props) => {
    return (
        <h4 {...props}>{props.content}</h4>
    );
}

export default TitleText;
