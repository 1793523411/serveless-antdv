import React, { useState } from 'react';
import { Route } from "react-router-dom";

import './index.css'
import { Layout, Menu, Breadcrumb } from 'antd';

import {
  BarsOutlined,
  PlusCircleOutlined,
  BarChartOutlined,
  FormOutlined
} from '@ant-design/icons';

import G201 from '../G201/index'
import G202 from '../G202/index'

import G2Plot01 from '../G2Plot01/index'
import G2Plot02 from '../G2Plot02/index'
import G2Plot03 from '../G2Plot03/index'
import G2Plot04 from '../G2Plot04/index'

// import G601 from '../G601/index'
// import G602 from '../G602/index'

import Graphin01 from '../Graphin01/index'
import Graphin02 from '../Graphin02/index'
import Graphin03 from '../Graphin03/index'

// import L701 from '../L701/index'
// import L702 from '../L702/index'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {

  const [collapsed, setCollapsed] = useState(false)
  const [url, setUrl] = useState('无')

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  const handleClickArticle = e => {
    setUrl(e.key)

    switch (e.key) {
      case "G201":
        setUrl('G201')
        props.history.push('/G201')
        break
      case "G202":
        setUrl('G202')
        props.history.push('/G202')
        break
      case "G2Plot01":
        setUrl('G2Plot01')
        props.history.push('/G2Plot01')
        break
      case "G2Plot02":
        setUrl('G2Plot02')
        props.history.push('/G2Plot02')
        break
      case "G2Plot03":
        setUrl('G2Plot03')
        props.history.push('/G2Plot03')
        break
      case "G2Plot04":
        setUrl('G2Plot04')
        props.history.push('/G2Plot04')
        break
      case "G601":
        setUrl('G601')
        props.history.push('/G601')
        break
      case "G602":
        setUrl('G602')
        props.history.push('/G602')
        break
      case "Graphin01":
        setUrl('Graphin01')
        props.history.push('/Graphin01')
        break
      case "Graphin02":
        setUrl('Graphin02')
        props.history.push('/Graphin02')
        break
      case "Graphin03":
        setUrl('Graphin02')
        props.history.push('/Graphin03')
        break
      case "L701":
        setUrl('L701')
        props.history.push('/L701')
        break
      case "L702":
        setUrl('L702')
        props.history.push('/L702')
        break
    default :
        break
    }


  }

  return (
    <Layout style={{ minHeight: '100vh' }} >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ position: "fixed", height: "100%" }}>
        <div className="logo" style={{ height: 32, backgroundColor: '#ffffff33', color: '#fff', margin: 16, textAlign: 'center', lineHeight: 2.2 }}>欢迎</div>
        <Menu theme="dark" defaultSelectedKeys={['Manager']} mode="inline" onClick={handleClickArticle}>
          <SubMenu key="sub1" icon={<BarsOutlined />} title="G2">
            <Menu.Item key="G201" icon={<PlusCircleOutlined />}>
              G201
            </Menu.Item>
            <Menu.Item key="G202" icon={<PlusCircleOutlined />}>
              G201
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<BarsOutlined />} title="G2Plot">
            <Menu.Item key="G2Plot01" icon={<PlusCircleOutlined />}>
              G2Plot01
            </Menu.Item>
            <Menu.Item key="G2Plot02" icon={<PlusCircleOutlined />}>
              G2Plot02
            </Menu.Item>
            <Menu.Item key="G2Plot03" icon={<PlusCircleOutlined />}>
              G2Plot03
            </Menu.Item>
            <Menu.Item key="G2Plot04" icon={<PlusCircleOutlined />}>
              G2Plot04
            </Menu.Item>
          </SubMenu>

          {/* <SubMenu key="sub3" icon={<BarsOutlined />} title="G6">
            <Menu.Item key="G601" icon={<PlusCircleOutlined />}>
              G601
            </Menu.Item>
            <Menu.Item key="G602" icon={<PlusCircleOutlined />}>
              G602
            </Menu.Item>
          </SubMenu> */}

          <SubMenu key="sub4" icon={<BarsOutlined />} title="Graphin">
            <Menu.Item key="Graphin01" icon={<PlusCircleOutlined />}>
              Graphin01
            </Menu.Item>
            <Menu.Item key="Graphin02" icon={<PlusCircleOutlined />}>
              Graphin02
            </Menu.Item>
            <Menu.Item key="Graphin03" icon={<PlusCircleOutlined />}>
              Graphin03
            </Menu.Item>
          </SubMenu>

          {/* <SubMenu key="sub5" icon={<BarsOutlined />} title="L7">
            <Menu.Item key="L701" icon={<PlusCircleOutlined />}>
              L701
            </Menu.Item>
            <Menu.Item key="L702" icon={<PlusCircleOutlined />}>
              L702
            </Menu.Item>
          </SubMenu> */}

        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} >
          <div style={{ fontSize: 28, paddingLeft: 20, fontWeight: 'bold' }}>antdV</div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{url}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 450 }}>

              <div>
                <Route path="/G201" exact component={G201} />
                <Route path="/G202" exact component={G202} />
                <Route path="/G2Plot01" exact component={G2Plot01} />
                <Route path="/G2Plot02" exact component={G2Plot02} />
                <Route path="/G2Plot03" exact component={G2Plot03} />
                <Route path="/G2Plot04" exact component={G2Plot04} />
                {/* <Route path="/G601" exact component={G601} />
                <Route path="/G602" exact component={G602} /> */}
                <Route path="/Graphin01" exact component={Graphin01} />
                <Route path="/Graphin02" exact component={Graphin02} />
                <Route path="/Graphin03" exact component={Graphin03} />
                {/* <Route path="/L701" exact component={L701} /> */}
                {/* <Route path="/L702" exact component={L702} /> */}
              </div>

            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>跌倒的小黄瓜 ©2020 Created by Aliyun Midway</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminIndex
