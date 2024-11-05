import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserRecord = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newUserData, setNewUserData] = useState({ name: '', email: '', phone: '', state: '' });
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', userData);
      setUsers([...users, response.data]);
      setNewUserData({ name: '', email: '', phone: '', state: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateUser = async (userId, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/users/${userId}`, updatedData);
      const updatedUsers = users.map((user) => (user._id === userId ? response.data : user));
      setUsers(updatedUsers);
      setSelectedUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setNewUserData({ ...user });
  };

  const handleClearForm = () => {
    setNewUserData({ name: '', email: '', phone: '', state: '' });
    setSelectedUser(null);
  };

  return (
    <div style={styles.container}>
      {isLoading && <p>Loading users...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {users.length > 0 ? (
        <div style={styles.tableContainer}>
          <h2 style={styles.heading}>User Records</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>Email</th>
                <th style={styles.tableHeader}>Phone</th>
                <th style={styles.tableHeader}>State</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{user.name}</td>
                  <td style={styles.tableCell}>{user.email}</td>
                  <td style={styles.tableCell}>{user.phone}</td>
                  <td style={styles.tableCell}>{user.state}</td>
                  <td style={styles.tableCell}>
                    <button style={styles.buttonEdit} onClick={() => handleSelectUser(user)}>Edit</button>
                    <button style={styles.buttonDelete} onClick={() => handleDeleteUser(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No users found.</p>
      )}

      <h2 style={styles.heading}>{selectedUser ? 'Update User' : 'Create User'}</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (selectedUser) {
            handleUpdateUser(selectedUser._id, newUserData);
          } else {
            handleCreateUser(newUserData);
          }
        }}
        style={styles.form}
      >
        <label htmlFor="name" style={styles.label}>Name:</label>
        <input type="text" name="name" id="name" value={newUserData.name} onChange={handleInputChange} required style={styles.input} />

        <label htmlFor="email" style={styles.label}>Email:</label>
        <input type="email" name="email" id="email" value={newUserData.email} onChange={handleInputChange} required style={styles.input} />

        <label htmlFor="phone" style={styles.label}>Phone:</label>
        <input type="tel" name="phone" id="phone" value={newUserData.phone} onChange={handleInputChange} required style={styles.input} />

        <label htmlFor="state" style={styles.label}>State:</label>
        <input type="text" name="state" id="state" value={newUserData.state} onChange={handleInputChange} required style={styles.input} />

        <button type="submit" style={styles.buttonSubmit}>{selectedUser ? 'Update' : 'Create'}</button>
        {selectedUser && <button type="button" onClick={handleClearForm} style={styles.buttonCancel}>Cancel</button>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  tableContainer: {
    overflowX: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
  },
  tableHeader: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    fontWeight: 'bold',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
    color: '#333',
  },
  buttonEdit: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '5px 10px',
    marginRight: '5px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  buttonDelete: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  buttonSubmit: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  buttonCancel: {
    backgroundColor: '#6c757d',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontWeight: 'bold',
  },
};

export default UserRecord;
