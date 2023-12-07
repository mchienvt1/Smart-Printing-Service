# Installation
To use the application, you can follow the following steps:
## Clone the repository
Open a terminal at a directory of your choice and enter these commands:
```console
git clone https://github.com/mchienvt1/Smart-Printing-Service.git
cd Smart-Printing-Service
```
## Install dependencies
First, if you haven't installed NodeJS, visit https://nodejs.org/ and download it.
Next, you will have to install all the dependencies of our project. 
```console
npm install
```
You have installed all the dependencies.

## Add .env to folder project Smart-Printing-Service
The contents of the .env file are as follows:
```console
PORT=3000
MONGO_URL=mongodb+srv://nguyengl03:0979798554@cluster0.rq9sxqs.mongodb.net/spss
```
## Set up a database server
The application will also need a MongoDB server for the backend to connect to the database. If your machine does not have any MongoDB server, install one of your preference. 
Please connect to our MongoDB Server: 
```console
Please connect to our MongoDB Server:
mongodb+srv://nguyengl03:0979798554@cluster0.rq9sxqs.mongodb.net/spss
```
You are ready now. Let's start the application.
## Run the application
Run these commands:
```console
npm start
```
Now the application should be starting. The application will run on http://localhost:3000.
