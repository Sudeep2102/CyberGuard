import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportRecord = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeeName, setEmployeeName] = useState('');

  const API_BASE_URL = 'http://localhost:5000';
  const FILE_SERVER_URL = 'http://localhost:3001';

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/reports`);
      setReports(response.data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching reports:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getFileUrl = (evidence) => {
    const evidencePath = evidence.startsWith('/uploads') ? evidence : `/${evidence}`;
    return `${FILE_SERVER_URL}${evidencePath}`;
  };

  const handleFileClick = async (fileUrl, event) => {
    try {
      await axios.head(fileUrl);
    } catch (err) {
      event.preventDefault();
      alert('File not found or inaccessible. Please check the file path.');
      console.error('Error accessing file:', err);
    }
  };

  const handleAssignCase = (report) => {
    setSelectedReport(report);
    setAssignModalOpen(true);
  };

  const submitAssignCase = async () => {
    try {
      await axios.post(`${API_BASE_URL}/api/reports/assign`, {
        reportId: selectedReport._id,
        employeeEmail,
        employeeName,
      });
      alert(`Case assigned to ${employeeName} (${employeeEmail}) successfully.`);
      setAssignModalOpen(false);
      setEmployeeEmail('');
      setEmployeeName('');
    } catch (err) {
      console.error('Error assigning case:', err);
    }
  };

  const handleUpdateReport = (report) => {
    setSelectedReport(report);
    setUpdateModalOpen(true);
  };

  const submitUpdateReport = async (updatedData) => {
    try {
      await axios.put(`${API_BASE_URL}/api/reports/${selectedReport._id}`, updatedData);
      alert('Report updated successfully.');
      setUpdateModalOpen(false);
      fetchReports();
    } catch (err) {
      console.error('Error updating report:', err);
    }
  };

  const handleDeleteReport = async (reportId) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      try {
        await axios.delete(`${API_BASE_URL}/api/reports/${reportId}`);
        alert('Report deleted successfully.');
        fetchReports();
      } catch (err) {
        console.error('Error deleting report:', err);
      }
    }
  };

  return (
    <div style={styles.container}>
      {isLoading && <p style={styles.loading}>Loading reports...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {reports.length > 0 ? (
        <div style={styles.tableContainer}>
          <h2 style={styles.heading}>Reports</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Date & Time</th>
                <th style={styles.tableHeader}>State</th>
                <th style={styles.tableHeader}>District</th>
                <th style={styles.tableHeader}>Platform</th>
                <th style={styles.tableHeader}>Platform ID</th>
                <th style={styles.tableHeader}>Evidence</th>
                <th style={styles.tableHeader}>Description</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report._id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{new Date(report.dateTime).toLocaleString()}</td>
                  <td style={styles.tableCell}>{report.state}</td>
                  <td style={styles.tableCell}>{report.district}</td>
                  <td style={styles.tableCell}>{report.platform}</td>
                  <td style={styles.tableCell}>{report.platformId}</td>
                  <td style={styles.tableCell}>
                    {report.evidence ? (
                      <a
                        href={getFileUrl(report.evidence)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                        onClick={(e) => handleFileClick(getFileUrl(report.evidence), e)}
                      >
                        View Evidence
                      </a>
                    ) : (
                      'No Evidence'
                    )}
                  </td>
                  <td style={styles.tableCell}>{report.description}</td>
                  <td style={styles.tableCell}>
                    <button style={styles.button} onClick={() => handleAssignCase(report)}>Assign</button>
                    <button style={styles.button} onClick={() => handleUpdateReport(report)}>Update</button>
                    <button style={styles.buttonDelete} onClick={() => handleDeleteReport(report._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={styles.noReports}>No reports found.</p>
      )}

      {assignModalOpen && (
        <div style={styles.modal}>
          <h3>Assign Case</h3>
          <label>
            Employee Name:
            <input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
          </label>
          <label>
            Employee Email:
            <input value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} />
          </label>
          <button style={styles.button} onClick={submitAssignCase}>Assign</button>
          <button style={styles.buttonCancel} onClick={() => setAssignModalOpen(false)}>Cancel</button>
        </div>
      )}

      {updateModalOpen && (
        <div style={styles.modal}>
          <h3>Update Report</h3>
          <label>
            Description:
            <input
              value={selectedReport.description}
              onChange={(e) => setSelectedReport({ ...selectedReport, description: e.target.value })}
            />
          </label>
          <button style={styles.button} onClick={() => submitUpdateReport(selectedReport)}>Update</button>
          <button style={styles.buttonCancel} onClick={() => setUpdateModalOpen(false)}>Cancel</button>
        </div>
      )}
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
  loading: {
    textAlign: 'center',
    color: '#666',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#ffe6e6',
    borderRadius: '4px',
    margin: '10px 0',
  },
  tableContainer: {
    overflowX: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '0 auto',
    backgroundColor: '#fff',
  },
  tableHeader: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left',
    color: '#333',
    fontSize: '14px',
  },
  link: {
    color: '#1e90ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  button: {
    padding: '8px 12px',
    margin: '0 5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  buttonDelete: {
    padding: '8px 12px',
    margin: '0 5px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  buttonCancel: {
    padding: '8px 12px',
    backgroundColor: '#ccc',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    zIndex: 1000,
  },
  noReports: {
    textAlign: 'center',
    color: '#888',
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default ReportRecord;
