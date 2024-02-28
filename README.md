# NoteSaver - Personal Note-taking Website

## Overview
NoteSaver is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to log in and add their notes. The website provides a user-friendly interface for managing and organizing personal notes securely.

## Features
- **User Authentication**: Users can register for an account, log in, and log out securely.
- **Note Management**: Add, view, edit, and delete personal notes.
- **Responsive Design**: The website is responsive and works seamlessly on desktop and mobile devices.
- **User Profiles**: Each user has their own profile page to manage their notes.
- **MongoDB Database**: MongoDB is used to store user data and notes securely.
- **Express.js Backend**: The backend server is built using Express.js to handle authentication and CRUD operations.
- **React.js Frontend**: The frontend is developed using React.js for a modern, interactive user experience.
- **Bootstrap Styling**: Bootstrap is used for responsive design and styling components.

## Technologies Used
- **MongoDB**: NoSQL database for storing user data and notes.
- **Express.js**: Web application framework for building backend server and APIs.
- **React.js**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime environment for server-side development.
- **Bootstrap**: Front-end framework for responsive and mobile-first web development.
- **JSON Web Tokens (JWT)**: Used for secure authentication and authorization.

## Setup Instructions
1. **Clone the Repository**: Clone the NoteSaver repository to your local machine using the following command:
   git clone <repository_url>

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies for both the client and server:
cd notesaver
cd client
npm install
cd ..
cd server
npm install

3. **Set Up MongoDB Database**: Set up a MongoDB database and update the connection string in the  file with your MongoDB URI.

4. **Start the Server**: Start the Express.js server by running the following command in the `server` directory:
npm run both

6. **Access the Application**: Once the server and client are running, access the NoteHub website by navigating to your web browser.

## Usage
- Register for an account or log in to access your personal note-taking dashboard.
- Add new notes, view existing notes, edit notes, or delete notes as needed.
- Log out securely when finished.

## Contributing
Contributions to the NoteHub project are welcome. Feel free to submit bug reports, feature requests, or pull requests to help improve the website.



