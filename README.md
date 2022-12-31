# NTUA ECE SAAS 2022 PROJECT
  
## TEAM (22)
### Dependencies

MySQL/MariaDB for the databases 

Node.js with the following packages:
- avsc 
- axios 
- body-parser 
- cors 
- express 
- kafkajs
- mysql 
- node-rdkafka 
- socket.io 

React.js with the following packages
- axios
- gapi-script
- highcharts
- highcharts-react-official
- moment
- react
- react-counter-input
- react-dom
- react-element-popper
- react-google-login
- react-multi-date-picker
- react-router
- react-router-dom
- react-scripts
- react-select
- socket.io-client

### How to run locally:

◽ run the shell script cluster-start.sh (starting cluster brokers brokers) <br>
◽ run npm start inside the frontend folder in order to load the Frontend part of our Software on your browser <br>
◽ run inside the API folder the following instructions in order to start the servers of the microservices: <br>
&emsp;▫️npm run start:atl_consumer <br>
&emsp;▫️npm run start:agpt_consumer <br>
&emsp;▫️npm run start:users <br>
&emsp;▫️npm run start:atl_producer <br>
&emsp;▫️npm run start:agpt_producer <br>

### NOTICE

Producers read a csv file every 5 seconds so as to simulate the data being updated (every one hour in reality). 
