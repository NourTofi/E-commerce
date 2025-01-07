import React from 'react'
import TopBar from '../../components/dshboard/topBar'
import SidBar from '../../components/dshboard/sidBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <TopBar />
      <SidBar />
      <Outlet />
    </div>
  );
}

export default Dashboard
