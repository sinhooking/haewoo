import { Layout } from 'antd';
import React from 'react';
import './App.less';
import FooterContent from './components/blocks/FooterContent';
import SideMenu from './components/blocks/SideMenu';
import Stars from './components/blocks/Stars';
import DesignAndProject from './components/sections/DesignAndProject/DesignAndProject';
import MainImg from './static/main_symbol.a9e76b9.png'
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'unset', padding: '0', textAlign: 'center' }}>
          <SideMenu />
        </Header>
        <Content className="site-layout">
          <Stars />
          <div className="symbol__area">
            <img src={MainImg} alt="main icon" />
          </div>
          <DesignAndProject />
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#646464' }}>
          <FooterContent />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
