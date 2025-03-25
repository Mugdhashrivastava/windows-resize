import { useState, useEffect } from 'react';

export default function App() {
  const [isDesktop, setIsDesktop] = useState(false); // default state

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    
    handleResize();

  
    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isDesktop ? <h1>Desktop View</h1> : <h1>Mobile View</h1>}
    </div>
  );
}
