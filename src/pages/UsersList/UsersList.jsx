import ContentContainer from "../../components/ContentContainer/ContentContainer.jsx";
import Table from "antd/es/table";
import {Button, Divider, Spin} from "antd";
import {Link} from "react-router-dom";
import {useStore, useEvent} from "effector-react";
import {fetchUsersFx, $users, changeUser} from "../../store/usersStore.js";
import {useEffect} from "react";

const UsersList = () => {
    const users = useStore($users);
    const pending = useStore(fetchUsersFx.pending)
    const fetchUsers = useEvent(fetchUsersFx)

    useEffect(() => {fetchUsers()}, [])

    const sidebarMenuItems = [
        {
            label: 'Create',
            children: [{label: 'User'}, {label: 'Department'}, {label: 'Group'}]
        },
        {
            label: 'Export',
            disabled: true
        },
        {
            label: <Link to={'/help'}>Help</Link>,
        },
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Birth Year',
            dataIndex: 'birth_year',
        },
        {
            title: 'Height',
            dataIndex: 'height',
        }
    ]

    return <ContentContainer sidebarMenuItems={sidebarMenuItems}>
        <Divider orientation={'left'} orientationMargin={0}>Users List</Divider>
        <Button onClick={() => changeUser({name: 'Luke Skywalker', changed: 'test'})}>Add user</Button>
            <Table size={'small'} dataSource={users} columns={columns} loading={pending} bordered/>
    </ContentContainer>
}

export default UsersList