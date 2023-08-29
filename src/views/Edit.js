import React, { Component } from 'react';

class Edit extends Component {
  render() {
    const { selectedEmployee, handleEditInputChange, handleUpdate, handleCancel } = this.props;

    return (
      <div className="edit-form">
        <h2>Edit Employee</h2>
            <input
              type="text"
              name="name"
              value={selectedEmployee.name}
              onChange={handleEditInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="code"
              value={selectedEmployee.code}
              onChange={handleEditInputChange}
              placeholder="Code"
            />
            <input
              type="text"
              name="profession"
              value={selectedEmployee.profession}
              onChange={handleEditInputChange}
              placeholder="Profession"
            />
            <input
              type="text"
              name="color"
              value={selectedEmployee.color}
              onChange={handleEditInputChange}
              placeholder="Color"
            />
            <input
              type="text"
              name="city"
              value={selectedEmployee.city}
              onChange={handleEditInputChange}
              placeholder="City"
            />
            <input
              type="text"
              name="branch"
              value={selectedEmployee.branch}
              onChange={handleEditInputChange}
              placeholder="Branch"
            />
            <label>
              Assigned:
              <input
                type="checkbox"
                name="assigned"
                checked={selectedEmployee.assigned}
                onChange={handleEditInputChange}
              />
            </label><br/><br/>
        <button onClick={handleUpdate}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }
}

export default Edit;
