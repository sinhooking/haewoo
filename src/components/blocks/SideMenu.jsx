// import { Menu } from 'antd';
import React, {
    // useReducer
} from 'react';
// import DrawerItem from '../elements/DrawerItem/DrawerItem';
// import Hambuger from '../elements/Hambuger/Hambuger';

// const VISIBLE_TRUE = 'VISIBLE_TRUE';
// const VISIBLE_FALSE = 'VISIBLE_FALSE';

// const initialState = {
//     visible: false
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case VISIBLE_TRUE:
//             return { visible: true };
//         case VISIBLE_FALSE:
//             return { visible: false };
//         default:
//             return { visible: false };
//     }
// }

const SideMenu = () => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const onClose = () => dispatch({ type: VISIBLE_FALSE })
    return (
        <>
            {/* <DrawerItem
                visible={state.visible}
                onClose={onClose}
                className="side__menu_title"
                contents={['Home', 'About', 'Contact Us']}
            /> */}
            <span id="logo">Haewoo Kim</span>
            {/* <Menu
                style={{
                    float: 'right',
                    background: 'unset'
                }}
                mode="horizontal"
                selectedKeys={[]}
                onClick={() => dispatch({ type: VISIBLE_TRUE })}
                >
                <Menu.Item >
                    <Hambuger />
                </Menu.Item>
            </Menu> */}
        </>
    );
}

export default SideMenu;
