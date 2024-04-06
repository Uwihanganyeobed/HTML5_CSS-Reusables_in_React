import  { useState } from 'react';
import './Accordition.css'; // Import CSS for styling

const Accordition = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h2>Accordition</h2>
      <div>
        <p onClick={() => handleClick(1)} className={activeIndex === 1 ? 'active' : ''}>Section 1 </p>
        {activeIndex === 1 && (
          <div className="content">
            <p>Content for Section 1...</p>
          </div>
        )}
      </div>
      <div>
        <p onClick={() => handleClick(2)} className={activeIndex === 2 ? 'active' : ''}>Section 2</p>
        {activeIndex === 2 && (
          <div className="content">
            <p>Content for Section 2...</p>
          </div>
        )}
      </div>
      <div>
        <p onClick={() => handleClick(3)} className={activeIndex === 3 ? 'active' : ''}>Section 3</p>
        {activeIndex === 3 && (
          <div className="content">
            <p>Content for Section 3...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordition;
