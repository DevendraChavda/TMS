// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Button } from './components/ui/button'
import { Routes, Route } from 'react-router-dom'
import Client from './Pages/client/Client'
import Service from './Pages/service/Service'
// import Admin from './Pages/admin/Admin'
import { SideBar } from "./Pages/admin/sidebar/components/mail"
// import TaskPage from './Pages/client/Client'
import AllClient from './Pages/admin/allclient/page'
import AllServiePro from './Pages/admin/allserviceprovider/page'
import AdminDashboard from './Pages/admin/dashboard/page'
import { ThemeProvider } from "./components/ui/theme-provider"

import MailPage from './Pages/admin/Admin'
import Setting from './Pages/admin/setting/Setting'
// import Status from './Pages/Status'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
        <div>
          <Routes>
            <Route path='/client' element={<Client />} />
            <Route path='/service' element={<Service />} />
            <Route path="/admin" index element={<MailPage />} />
            <Route element={<SideBar accounts={[]} mails={[]} defaultLayout={undefined} navCollapsedSize={0} />}>
              <Route index path="/admin/allclient" element={<AllClient />} />
            </Route>
            <Route element={<SideBar accounts={[]} mails={[]} defaultLayout={undefined} navCollapsedSize={0} />}>
              <Route path="/admin/allservicepro" element={<AllServiePro />} />
            </Route>
            <Route element={<SideBar accounts={[]} mails={[]} defaultLayout={undefined} navCollapsedSize={0} />}>
              <Route path="/admin/adminticket" element={<AdminDashboard />} />
            </Route>
            <Route element={<SideBar accounts={[]} mails={[]} defaultLayout={undefined} navCollapsedSize={0} />}>
              <Route path="/admin/setting" element={<Setting />} />
            </Route>
            {/* <Route path="/status" element={<Status />} /> */}
          </Routes>
        </div>
    </ThemeProvider>
  )
}
export default App
