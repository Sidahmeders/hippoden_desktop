import './style.scss'
import { Link } from 'react-router-dom'
import SidebarElement from './sidebarElement'
import SideBarToggle from './sidebarToggle'
import { ContextConsumer } from '../../../context'
import { useContext } from 'react'

// dashboard icons
import dashBoard from '../../../assets/icons/sidebar/dashboard.svg'
import managePatients from '../../../assets/icons/sidebar/manage-patients.svg'
// import addUser from '../../../assets/icons/sidebar/user-plus.svg'
import reports from '../../../assets/icons/sidebar/charts.svg'
import manageUsers from '../../../assets/icons/sidebar/manage-users.svg'
import userProfile from '../../../assets/icons/sidebar/user-solid.svg'
import notification from '../../../assets/icons/sidebar/bell-solid.svg'
import logout from '../../../assets/icons/sidebar/logout.svg'
import projects from '../../../assets/icons/sidebar/projects.svg'

const sideBarItems = [
    { text: 'dashboard', route: 'dashboard', icon: dashBoard },
    { text: 'patients', route: '', icon: managePatients },
    { text: 'products', route: '', icon: manageUsers },
    { text: 'reports', route: '', icon: reports },
    { text: 'payments', route: '', icon: projects },
    { text: 'notifications', route: 'notifications', icon: notification, notification: 13 },
    { text: 'profile', route: '', icon: userProfile },
    { text: 'logout', route: 'logout', icon: logout }
]

function SideBar() {
    const { sidebarState, toggleSidebar } = useContext(ContextConsumer)

    const handleRouteChange = (id) => {
        const sideBarElements = document.querySelectorAll('.sidebar-element')
        sideBarElements.forEach((item, index) => {
            if (id === index) {
                item.classList.add('selected')
            } else {
                item.classList.remove('selected')
            }
        })
    }

    return (
        <div className={`sidebar ${sidebarState ? 'closed' : 'open'}`}>
            <Link onClick={() => handleRouteChange(null)} to="/home" className="logo">
                DR.<span>DAGH</span>MIN
            </Link>
            {sideBarItems.map((item, index) => (
                <SidebarElement
                    id={index}
                    key={index}
                    text={item.text}
                    icon={item.icon}
                    route={item.route}
                    notification={item.notification}
                    clickHandler={handleRouteChange}
                />
            ))}
            <SideBarToggle toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default SideBar
