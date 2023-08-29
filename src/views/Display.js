import React, { Component } from 'react';

class Display extends Component {
  render() {
    const { employees, handleEdit, handleDelete } = this.props;

    return (
      <div className="employee-list">
        <h2>Employee List</h2>
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Code</th>
              <th>Profession</th>
              <th>Color</th>
              <th>City</th>
              <th>Branch</th>
              <th>Assigned</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.code}</td>
                <td>{employee.profession}</td>
                <td>{employee.color}</td>
                <td>{employee.city}</td>
                <td>{employee.branch}</td>
                <td>{employee.assigned ? 'Yes' : 'No'}</td>
                <td>
                  <button id="edit" onClick={() => handleEdit(employee)}>Edit</button>
                  <button id="delete" onClick={() => handleDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Display;
