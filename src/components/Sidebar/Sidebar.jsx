import  { useState } from 'react';
import './Sidebar.css'; // Create a CSS file for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <h2>Animated Sidenav Example</h2>
      <p>Click on the element below to open the side navigation menu.</p>
      <span className="openbtn" onClick={openNav}>&#9776; open</span>
    </div>
  );
};

export default Sidebar;
