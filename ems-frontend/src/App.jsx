import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent.jsx'
import ListDeparmentComponent from './Component/ListDeparmentComponent.jsx'
import DepartmentComponent from './Component/DepartmentComponent.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          <Route path='/add-new-employee' element={<EmployeeComponent />}></Route>
          <Route path='/update/:id' element={<EmployeeComponent />}></Route>
          <Route path='/departments' element={<ListDeparmentComponent />}></Route>
          <Route path='/add-new-department' element={<DepartmentComponent />}></Route>
          <Route path='/update-department/:id' element={<DepartmentComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
