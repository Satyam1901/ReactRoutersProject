
import { Outlet } from 'react-router-dom'
import Footer from './componets/Footer/footer'
import Header from './componets/Header/header'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout