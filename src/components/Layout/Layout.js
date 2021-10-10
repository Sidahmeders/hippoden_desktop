import SideBar from './sidebar'
import { ContextConsumer } from '../../context'
import { useContext } from 'react'

export default function Layout({ children }) {
    const { sidebarState } = useContext(ContextConsumer)

    return (
        <>
            <SideBar />
            <main style={{ marginLeft: sidebarState ? '60px' : '220px' }}>{children}</main>
        </>
    )
}
