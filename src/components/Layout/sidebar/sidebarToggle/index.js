import './style.scss'
import leftArrows from '../../../../assets/icons/sidebar/double-arrow.svg'

export default function SidebarToggle({ toggleSidebar }) {
    return (
        <div className="sidebar-toggle" onClick={toggleSidebar}>
            <img width="24px" src={leftArrows} alt="toggle" />
        </div>
    )
}
