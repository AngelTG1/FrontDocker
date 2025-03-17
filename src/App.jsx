import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://api:3000/api/users'); // Replace with your API endpoint
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <>
      <Navbar />
      <section className="mt-5 px-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </section>
    </>
  );
}

export default App;
