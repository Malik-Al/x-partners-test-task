# Test project for companies x-partners-test-task backend
# current branch master
General information
## Backend
- Version nodejs v18.14.2
- The configuration is located in the msdata/config directory
- the chronology of static content in the msdata/static directory  
- Stack Node.js/Express.js/MongoDB

## Frontend
- Configuration api backend src/config.json
- Stack React.js/Redux-toolkit/Mui


## Usage Backend

## Installation
- go to the folder cd ./backend
- Run `npm install` to install dependencies.

- Run development
``` 
npm run dev
```

- Run prod
```
npm run start
``` 

## Mongodb configs msdata/config
## Required Added folder msdata/static to save static content

## Using api backend
## base_url: http://localhost:8055

# register = base_url/route/sing-up 
- Request
- POST form-data
- field: 
    - name
    - email
    - img
    - password
    - date_birth
    - gender


# login = base_url/route/sing-in
- Request
- POST body
- field: 
    - email
    - password

# update = base_url/route/account/id
- Request
- PUT form-data
- field: 
    - name
    - email
    - password

# list user = base_url/route/people
- Request
- GET

## Usage Frontend
- go to the folder cd ./frontend

## Installing packages
### `npm i`

## Project launch
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contact
For questions, contact me at malikimenov@gmail.com
