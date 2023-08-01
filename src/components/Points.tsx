import React, { useContext } from 'react';
import { UserContext } from '../Authentication';
import './Points.css';

const Points: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="points-container">
      <h2>Your Points</h2>
      <p className="points-total">{user?.points}</p>
    </div>
  );
};

export default Points;