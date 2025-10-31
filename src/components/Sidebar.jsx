import React from 'react'
import {Link, Links } from 'react-router-dom'
function Sidebar() {
  return (
    <div className=' flex flex-col h-screen w-[300px]  justify-start items-center gap-2 '>
      <Link to='/base-2'  >Decimal to base-2</Link>
      <Link to='/base-8' >Decimal to base-8</Link>  
      <Link to='/base-16' >Decimal to base-16</Link>
      <Link to='/base-3' >Decimal to base-3</Link>
      <Link to='/base-5' >Decimal to base-5</Link>
      <Link to='/booth' >Booth Multilpication</Link>
      <Link to='/non-restoring' >Non-Restoring divison</Link>
      <Link to='/restoring' >Restoring divison</Link>
      <Link to='/IEEE' >IEEE 754 IN PYTHON</Link>
      <Link to='/IEEEC' >IEEE 754 IN C++</Link>
      <Link to='/2level' >2 Level hierarchy python</Link>
      <Link to='/3level' >3 Level hierarchy python</Link>
      <Link to='/2levelC' >2 Level hierarchy C++</Link>
      <Link to='/3levelC' >3 Level hierarchy C++</Link>
      <Link to='/DirectMapping' >Direct Mapping python</Link>
      <Link to='/2-way' >2 way set Associative Mapping python</Link>
      <Link to='/Fully' >Fully Associative Mapping python</Link>
      <Link to='/DirectMappingC' >Direct Mapping c++</Link>
      <Link to='/2-wayc' >2 way set Associative Mapping c++</Link>
      <Link to='/Fullyc' >Fully set Associative Mapping c++</Link>
    </div>
  )
}

export default Sidebar