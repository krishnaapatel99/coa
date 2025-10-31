import React from 'react'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Exp1 from './pages/Exp1'
import Exp2 from './pages/Exp2'
import Exp3 from './pages/Exp3'
import Exp4 from './pages/Exp4'
import Exp5 from './pages/Exp5'
import Exp6 from './pages/Exp6'
import Exp7 from './pages/Exp7'
import Exp8 from './pages/Exp8'
import Exp9 from './pages/Exp9'
import Exp10 from './pages/Exp10'
import Exp11 from './pages/Exp11'
import Exp12 from './pages/Exp12'
import Exp13 from './pages/Exp13'
import Exp14 from './pages/Exp14'
import Exp15 from './pages/Exp15'
import Exp16 from './pages/Exp16'
import Exp17 from './pages/Exp17'
import Exp18 from './pages/Exp18'
import Exp19 from './pages/Exp19'
import Exp20 from './pages/Exp20'
function App() {
  return (
    <div className='flex '><Sidebar/>
    
    <Routes>
      <Route path='/base-2' element={<Exp1/>} />
      <Route path='/base-8' element={<Exp2/>} />
      <Route path='/base-16' element={<Exp3/>} />
      <Route path='/base-3' element={<Exp4/>} />
      <Route path='/base-5' element={<Exp5/>} />
      <Route path='/booth' element={<Exp6/>} />
      <Route path='/non-restoring' element={<Exp7/>} />
      <Route path='/restoring' element={<Exp8/>} />
      <Route path='/IEEE' element={<Exp9/>} />
      <Route path='/IEEEC' element={<Exp10/>} />
      <Route path='/2level' element={<Exp11/>} />
      <Route path='/3level' element={<Exp12/>} />
      <Route path='/2levelC' element={<Exp13/>} />
      <Route path='/3levelC' element={<Exp14/>} />
      <Route path='/DirectMapping' element={<Exp15/>} />
      <Route path='/2-way' element={<Exp16/>} />
      <Route path='/Fully' element={<Exp17/>} />
      <Route path='/DirectMappingC' element={<Exp18/>} />
      <Route path='/2-wayc' element={<Exp19/>} />
      <Route path='/Fullyc' element={<Exp20/>} />
    </Routes>
    </div>
  )
}

export default App