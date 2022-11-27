import {Modal, Form, Input, InputNumber} from "antd";

const UsersModal = (onSubmit, onCancel, editUserModal, form) => {
    return (
        <Modal
            open={editUserModal}
            destroyOnClose={true}
            width={800}
            onOk={onSubmit}
            onCancel={onCancel}
            okText={'Save'}
            title={`Edit ${editUserModal?.name}`}
        >
            <Form
                id='create-update-user'
                name='create-update-user'
                form={form}
                layout={'vertical'}
            >
                <Form.Item
                    name='name'
                    label='User Name'
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='height'
                    label='User Height'
                >
                    <InputNumber min={0}/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default UsersModal