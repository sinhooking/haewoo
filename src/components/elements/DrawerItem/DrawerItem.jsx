import React from 'react';
import { Drawer } from 'antd';
import './index.less';

const DrawerItem = (props) => {

    return (
        <div>
            <Drawer
                closable={false}
                onClose={props.onClose}
                visible={props.visible}
            >
                {props.contents.map((content, index) => (
                    <p className={props.className} key={index}>{content}</p>
                ))}
            </Drawer>
        </div>
    );
}

export default DrawerItem;
