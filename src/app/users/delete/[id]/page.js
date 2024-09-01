'use client';
import { useEffect, useState } from 'react';

export default function Page({ params }) {
  const { id } = params;

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`https://backend024.vercel.app/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
  }, [id]);

  const deleteUser = async () => {
    const res = await fetch(`https://backend024.vercel.app/api/users/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      console.log('User deleted successfully');
      // Redirect or update UI after successful deletion
      // For example, redirect to another page
      window.location.href = '/users'; // You can change this to your desired route
    } else {
      console.error('Failed to delete user');
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-warning text-dark">
            User Details
          </div>
          <div className="card-body">
            {items.map((item) => (
              <div key={item.id}>
                <h5>FirstName: {item.firstname}</h5>
                <h5>LastName: {item.lastname}</h5>
                <h5>Username: {item.username}</h5>
                <button type="button" className="btn btn-danger" onClick={deleteUser}>
                  <i className="bi bi-trash"></i> DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
