import { useMediaQuery } from 'react-responsive';

export default function App() {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      {isDesktop ? <h1>Desktop View</h1> : <h1>Mobile View</h1>}
    </div>
  );
}
