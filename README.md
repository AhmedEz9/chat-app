# Chatly - Real-Time Chat Application

Chatly is a real-time chat application built using **Node.js**, **Express**, and **Socket.IO**. It allows users to join specific chat rooms, choose a nickname, and send messages to others in the same room. The application is deployed on Azure, making it accessible online.

## Features

- **Real-Time Messaging**: Users can send and receive messages instantly.
- **Nickname Feature**: Each user can choose a nickname, displayed with each message.
- **Azure Deployment**: Hosted on Azure for online access.

## Getting Started

To run the app locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AhmedEz9/chat-app.git
   cd chat-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   node index.js
   ```
   Open a browser and go to `http://localhost:3000` to test the app locally.

## Deployment

The application is deployed on Azure and can be accessed at: [Chatly on Azure](https://chatlyapp123.azurewebsites.net)

## Screenshots

Here are some screenshots showing Chatly in action:

(Images/4.png)

(Images/5.png)

(Images/6.png)

(Images/7.png)

## Issues and Solutions

- **Deployment Port Issue**: Initially, the app only worked locally because it was listening on a fixed port (3000). To solve this, I updated the `index.js` file to use `process.env.PORT || 3000`, allowing Azure to assign the port dynamically.
- **Azure Linux Configuration**: Setting up the app required a Linux-based service plan on Azure, as Windows configurations had limited support for the Node.js version needed. Switching to a Linux-based plan resolved the compatibility issues.

---

**Author**: Ahmed Ezzaroui
