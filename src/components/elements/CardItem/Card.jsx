import React from 'react';
import './index.less';
import { Card } from 'antd';

const { Meta } = Card;

const CardItem = (props) => {
    return (
        <Card
            hoverable
            onClick={props.onClick}
            cover={<img alt={props.title} src={props.src} />}
        >
            <Meta title={props.title} description={props.description} />
        </Card>
    );
}

export default CardItem;
