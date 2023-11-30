import React from 'react'
import DegList from './gowtham/degreeList'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import ClgList from './gowtham/collegeList'
import data from './gowtham/college.json'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<ClgList/>}/>
        <Route path="/DegreeList" element={<DegList data={data[0]}/>}/>
        {console.log(data[0])}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App