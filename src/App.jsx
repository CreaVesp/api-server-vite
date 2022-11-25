import {Link, Outlet} from "react-router-dom";
import './App.css';
import Layout from "antd/es/layout";
import {Header} from "antd/es/layout/layout";
import {Menu} from "antd";


function App() {
    const headerNavTabs = [
        {
            key: 0,
            label: 'Admin',
            children: [
                {label: <Link to={'/users'}>Users</Link>, key: Math.random()},
                {label: 'Permissions', key: Math.random()},
                {label: 'Consumers', key: Math.random()},
                {label: 'Services', key: Math.random()}
            ]
        },
        {
            key: 1,
            label: 'Audit',
            children: [
                {label: 'Submenu 1', key: Math.random()},
                {label: 'Submenu 2', key: Math.random()},
                {label: 'Submenu 3', key: Math.random()}]
        },
        {
            key: 2,
            label: 'Services',
            children: [{label: 'Recommendations', key: Math.random()}, {label: 'GovPlans', key: Math.random()}, ]
        },
        {
            key: 3,
            label: 'Log in'
        }
    ]

    return (
        <Layout>
            <Header>
                <Menu theme={'dark'} mode={'horizontal'} items={headerNavTabs}/>
            </Header>
            <Layout>
                <Outlet/>
            </Layout>
        </Layout>
    )
}

export default App;
