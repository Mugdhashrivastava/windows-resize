import useMediaQuery from './useMediaQuery';

export default function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div>
      {isDesktop ? <h1>Desktop View</h1> : <h1>Mobile View</h1>}
    </div>
  );
}
