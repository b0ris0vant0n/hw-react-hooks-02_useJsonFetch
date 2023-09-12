import React from 'react';
import useJsonFetch from './useJsonFetch';

function DataComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function ErrorComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Error</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function LoadingComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Loading</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function App() {
  return (
    <div>
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
}

export default App;
