import React, { useState, useEffect } from 'react';
import { User } from '../types/User';
import { getStreak } from '../utils/streakUtils';
import '../styles/Streak.css';

interface StreakProps {
  user: User;
}

const Streak: React.FC<StreakProps> = ({ user }) => {
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    const calculateStreak = async () => {
      const userStreak = await getStreak(user);
      setStreak(userStreak);
    };

    calculateStreak();
  }, [user]);

  return (
    <div className="streak-container">
      <h2>Streak</h2>
      <p>{streak}</p>
    </div>
  );
};

export default Streak;