import React, { useState } from 'react';
import CardItem from '../elements/CardItem/Card';
import CoinVilImg from '../../static/coinvil.jpg'

import Car from '../../static/car.jpg'
import Cardela from '../../static/carder.jpg'
import Dyanyang from '../../static/dyanyang.jpg'
import Sleepy from '../../static/st_thumbnail.jpg'
import Waplace from '../../static/waplace.jpg'
import Opana from '../../static/op_thumbnail.jpg'
import envIcons from '../../env';

import { Modal } from 'antd';

const CardList = () => {
    const items = [{
        title: 'Coinvil',
        description: '암호화폐 거래소 코인빌 Android App Design',
        src: CoinVilImg,
        key: 'coin'
    },
    {
        title: '차에 치였으면 좋겠다고 생각했다.',
        description: '텀블벅 출간 프로젝트 BOOK Design',
        src: Car,
        key: 'wascar'
    },
    {
        title: '카더라',
        description: '차의 대한 모든 정보 서비스 카더라 BI Design',
        src: Cardela,
        key: 'carderla'
    },
    {
        title: '단양 카약/리조트',
        description: '단양 카약/리조트 BI Design',
        src: Dyanyang,
        key: 'danyang'
    },
    {
        title: 'SLEEPY TRUNK',
        description: '짐 보관 웹/앱 서비스 UI/UX Design',
        src: Sleepy,
        key: 'sleepy'
    },
    {
        title: 'WAPLACE',
        description: '인테리어 견적 플랫폼 와플레이스 BI Design',
        src: Waplace,
        key: 'waplace'
    },
    {
        title: 'ONPARADE',
        description: '자수 홈페이지 브랜딩 UI/UX, BI Design',
        src: Opana,
        key: 'onparade'
    }]

    const [selectedProjects, setSelectedProjects] = useState([]);
    const onClick = (selectedItem) => {
        const folderKey = selectedItem.key
        setSelectedProjects(
            envIcons[folderKey]
                .map(item => require(`../../static/${folderKey}/${item}`))
        )

        setModalTitle(selectedItem.title)
        setvisible(true)
    }


    const [visible, setvisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    const modalInit = () => {
        setModalTitle('')
        setvisible(false)
        setSelectedProjects([])
    }

    return (
        <div className="center">
            {items.map((item, index) => (
                <CardItem onClick={() => onClick(item)} key={index} {...item} />
            ))}

            <Modal
                title={modalTitle}
                visible={visible}
                onCancel={modalInit}
                width={'90vw'}
                footer={[]}
            >
                <div style={{
                    height: '70vh',
                    overflowY: 'scroll'
                }}>
                {selectedProjects.map(item => <img style={{
                    width: '100%'
                }} src={item} alt="project descriptions" />)}
                </div>
            </Modal>
            
        </div>
    );
}

export default CardList;
