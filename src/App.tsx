import React from 'react';
import './styles/App.css';
import Authentication from './components/Authentication';
import UserProfile from './components/UserProfile';
import TaskGrid from './components/TaskGrid';
import Streak from './components/Streak';
import Points from './components/Points';

function App() {
  return (
    <div className="App">
      <Authentication />
      <UserProfile />
      <TaskGrid />
      <Streak />
      <Points />
    </div>
  );
}

export default App;