import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import TrendingSubject from "../../components/Trending Subjects/TrendingSubjects"

const Home = () => {
  return (
    <main>
        <Header />
        <TrendingSubject/>
        <Outlet />
    </main>
  )
}

export default Home