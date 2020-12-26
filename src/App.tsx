import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {loading === false ? <Dashboard /> : <Loading />}
      <GlobalStyle />
    </>
  );
};

export default App;
