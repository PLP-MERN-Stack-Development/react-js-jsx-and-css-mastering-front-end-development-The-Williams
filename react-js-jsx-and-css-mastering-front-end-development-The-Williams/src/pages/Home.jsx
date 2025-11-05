import React from 'react';
import Card from '../components/Card';
import TaskManager from '../components/TaskManager';

const Home = () => (
  <div className="space-y-6">
    <Card title="Welcome to PLP Task Manager">
      <p className="mb-4">Manage your daily tasks efficiently using React and Tailwind CSS.</p>
    </Card>
    <TaskManager />
  </div>
);

export default Home;
