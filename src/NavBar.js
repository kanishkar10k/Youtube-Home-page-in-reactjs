import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default NavBar;
