import React from 'react';
import { User } from '../types/User';
import '../styles/UserProfile.css';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Points:</strong> {user.points}</p>
      </div>
    </div>
  );
};

export default UserProfile;