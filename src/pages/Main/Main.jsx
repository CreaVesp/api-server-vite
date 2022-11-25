import ContentContainer from "../../components/ContentContainer/ContentContainer.jsx";
import {ClockCircleOutlined} from '@ant-design/icons'
import './Main.css'

const Main = () => {
    const sidebarMenuItems = [
        {
            label: 'Help',
        },
    ]
    return <ContentContainer sidebarMenuItems={sidebarMenuItems}>
        <div className={'icon-container'}><ClockCircleOutlined className={'icon'}/></div>
    </ContentContainer>
}

export default Main