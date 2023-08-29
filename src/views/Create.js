import React, { Component } from 'react';

class Create extends Component {
  render() {
    const { newEmployee, handleInputChange, handleCreate } = this.props;

    return (
      <div className="create-form">
        <h2>Create New Employee</h2>
        <div>
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
            placeholder="Name"
          /><br/>
          <input
            type="text"
            name="code"
            value={newEmployee.code}
            onChange={handleInputChange}
            placeholder="Code"
          /><br/>
          <input
            type="text"
            name="profession"
            value={newEmployee.profession}
            onChange={handleInputChange}
            placeholder="Profession"
          /><br/>
          <input
            type="text"
            name="color"
            value={newEmployee.color}
            onChange={handleInputChange}
            placeholder="Color"
          /><br/>
          <input
            type="text"
            name="city"
            value={newEmployee.city}
            onChange={handleInputChange}
            placeholder="City"
          /><br/>
          <input
            type="text"
            name="branch"
            value={newEmployee.branch}
            onChange={handleInputChange}
            placeholder="Branch"
          /><br/>
          <label>
            Assigned:
            <input
              type="checkbox"
              name="assigned"
              checked={newEmployee.assigned}
              onChange={handleInputChange}
            />
          </label><br/>
          <button onClick={handleCreate}>Create</button>
        </div>
      </div>
    );
  }
}

export default Create;
