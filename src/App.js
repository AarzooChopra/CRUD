import React, { Component } from 'react';
import './App.css';
import Edit from './views/Edit.js'; // Adjust the import path
import Create from './views/Create.js'; // Adjust the import path
import Display from './views/Display.js';

class App extends Component {
  state = {
    employees: [],
    newEmployee: {
      id: '',
      name: '',
      code: '',
      profession: '',
      color: '',
      city: '',
      branch: '',
      assigned: true,
    },
    selectedEmployee: null,
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/employees');
      const employees = await response.json();
      this.setState({ employees });
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  handleInputChange = event => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    this.setState(prevState => ({
      newEmployee: {
        ...prevState.newEmployee,
        [name]: newValue,
      },
    }));
  };

  handleCreate = async () => {
    const { newEmployee } = this.state;
    try {
      const response = await fetch('http://localhost:8080/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });
      if (response.status === 201) {
        this.setState({
          newEmployee: {
            id: '',
            name: '',
            code: '',
            profession: '',
            color: '',
            city: '',
            branch: '',
            assigned: true,
          },
        });
        this.fetchEmployees();
      }
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  handleDelete = async id => {
    try {
      await fetch(`http://localhost:8080/api/employees/${id}`, {
        method: 'DELETE',
      });
      this.fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  
  handleEdit = employee => {
    this.setState({ selectedEmployee: employee });
  };

  handleEditInputChange = event => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    this.setState(prevState => ({
      selectedEmployee: {
        ...prevState.selectedEmployee,
        [name]: newValue,
      },
    }));
  };

  handleUpdate = async () => {
    const { selectedEmployee } = this.state;
    try {
      const response = await fetch(
        `http://localhost:8080/api/employees/${selectedEmployee.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedEmployee),
        }
      );
      if (response.status === 200) {
        this.setState({ selectedEmployee: null });
        this.fetchEmployees();
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  handleCancel = () => {
    this.setState({ selectedEmployee: null });
  };

  

  render() {
    const { employees, newEmployee, selectedEmployee } = this.state;

    return (
      <div className="App">
        <h1>Plexxis Employees</h1>
        <Create
          newEmployee={newEmployee}
          handleInputChange={this.handleInputChange}
          handleCreate={this.handleCreate}
        />
        <Display
          employees={employees}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        {selectedEmployee && (
          <Edit
            selectedEmployee={selectedEmployee}
            handleEditInputChange={this.handleEditInputChange}
            handleUpdate={this.handleUpdate}
            handleCancel={this.handleCancel}
          />
        )}
      </div>
    );
  }
}

export default App;
