import ContentContainer from "../../components/ContentContainer/ContentContainer.jsx";
import Table from "antd/es/table";
import {Button, Divider, Form} from "antd";
import {Link} from "react-router-dom";
import {useStore, useEvent} from "effector-react";
import {fetchUsersFx, $users, changeUser} from "../../models/users/usersStore.js";
import {useEffect, useState} from "react";
import UsersModal from "./modal/UsersModal.jsx";

const UsersList = () => {
    const [editUserModal, setEditUserModal] = useState(false)

    const users = useStore($users);
    const pending = useStore(fetchUsersFx.pending)
    const fetchUsers = useEvent(fetchUsersFx)

    useEffect(() => {fetchUsers()}, [])

    // Users modal functions
    const [form] = Form.useForm()
    const onCloseUserModal = () => {
        setEditUserModal(false)
        form.resetFields()
    }
    const onSubmitUsersModal = values => console.log(values)

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
        },
        {
            width: 92,
            render: (_, record) => (
            <Button
                size={'small'}
                type={'primary'}
                onClick={() => setEditUserModal(record)}
            >
                    Change user
            </Button>
            )
        }
    ]

    return <>
        {/*<UsersModal onSubmit={onSubmitUsersModal} onCancel={onCloseUserModal} userModalVisible={editUserModal} form={form} />*/}
        <ContentContainer sidebarMenuItems={sidebarMenuItems}>
        <Divider orientation={'left'} orientationMargin={0}>Users List</Divider>
            <Table
                size={'small'}
                dataSource={users}
                columns={columns}
                loading={pending}
                bordered
                pagination={{pageSize: 20, position: ['bottomCenter']}}
            />
    </ContentContainer>
    </>
}

export default UsersList