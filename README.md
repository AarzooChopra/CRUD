# Plexxis Interview Exercise
## Requirements
Create a simple but impressive (looks good, works well, has intuitive design, etc.) CRUD application that can do the following:

1) Retrieve employees from a REST API  
2) Display the employees in a React application  
3) Has UI mechanisms for creating and deleting employees  
4) Has API endpoints for creating and deleting employees  
5) Edit your version of the `README.md` file to explain to us what things you did, where you focussed your effort, etc.

*Read over the `Bonus` objectives and consider tackling those items as well*

## Bonus (Highly Encouraged)

1) Use a relational database to store the data (SQLite, MariaDB, Postgres)  
2) UI mechanisms to edit/update employee data  
3) Add API endpoint to update employee data  
4) Use [React Table](https://react-table.js.org)  

## Other Technologies
You are permitted to use the following if you prefer ...  
1) TypeScript, Front-end or backend.  
2) NestJS, back end.  

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The front-end app runs off localhost:3000. The REST API is located in the /server folder and runs off localhost:8080. The data is being served from a JSON file located in the /server/data folder. Run `npm start` to start both servers.

## Getting it Done
* You are free to use whatever libraries that you want. Be prepared to speak to your decisions decisions.
* There is no time limit. Use as little or as much time as is necessary, but aim to get it done within a week. If you need more time it's no problem, but you must let us know. Sometimes life happens. That's ok.
* Fork or clone our repository into your own repository.
  * Send us the link when you are done the exercise (pglinker at plexxis dot com).

When you are done, we'll schedule a zoom call with you where you will share your screen, demo the application for us, and walk us through the code while we ask questions about it.

*****************************************************************************************************************************************

## Description
This CRUD application has the ability to:
1. Retrieve employees from the JSON file
2. Add them to an SQLite database
3. Display them in a tabular form in a React application
4. Create new employees
5. Delete employees
6. Update employees

All the changes made to the employees in the React applocation are also made to the database. For the purposes of this exercise, the database loads the employees from the original JSON file at the start so that the original entries are maintained.

The index.js file handles the backend of the application, while the App.js file handles the front-end. 

## index.js
* The database is initialized and entries are loaded from the JSON file.
* app.get gets all the employees
* app.delete uses the employee id to delete an employee
* app.put uses the employee id to update the employee info
* app.post adds a new employee
* All the db operations take place in this file

## App.js
* There is a views folder which contains 3 files: Create.js, Edit.js and Display.js
* These files contain classes to render the feilds to create a new employee, the table of employees, and the fields to update employee info.
* Putting these in separate files instead of directly in App.js makes the code modular and easier to understand.
* handleInputChange and handleCreate are responsible for getting the inputs from the input fields and creating a new employee
* handleDelete gets the employee from the employee id and deletes it
* handleEdit gets the selected employee, and handleEditInputChange gets the new inputs from the edit fields to update the employee
* handleUpdate updates the employee on clicking the 'Save' button and handleCancel cancels the edit operation on clicking the 'Cancel' button

## App.css
This files is used to apply CSS styles to some of the elements.