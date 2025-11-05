// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import useFetchData from './api/fetchData';

function App() {
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts?_limit=5');

  return (
    <Layout>
      {/* Task Manager */}
      <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <TaskManager />
      </section>

      {/* API Data */}
      <section className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">API Data</h2>

        {loading && <p className="text-gray-500 dark:text-gray-400">Loading data...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}

        {!loading && !error && (
          <ul className="list-disc pl-6 space-y-2">
            {data.map((item) => (
              <li key={item.id} className="text-gray-700 dark:text-gray-300">
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}

export default App;
