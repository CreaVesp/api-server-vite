import Layout from 'antd/es/layout'
import {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import './ContentContainer.css'

const ContentContainer = (props) => {
    const {sidebarMenuItems, children} = props

    return (
            <Layout>
                <Sider className='sider'><Menu items={sidebarMenuItems}></Menu></Sider>
                <Layout className='main'>
                    <Content>
                        {children}
                    </Content>
                </Layout>
            </Layout>
    );
}

export default ContentContainer;