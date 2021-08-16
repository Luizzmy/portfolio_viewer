# Welcome to Portfolio Viewer
This app allows you to:
Upload a csv file, store it in session, look at the file in a table, select previously uploaded files, calculates and shows total portfolio value given by the sum of positions values (Holding x Price x FXRate), validates your currency name against the open exchangerates API, allows the user to edit the data and update the Total Portfolio value and stores and updates the portfolios on a MongoDB database.

## DEMO Account

- User: email@email.com
- Password: password

### Environment Vars
- PORT= local connection port
- SESSION= session secret
- DB= MongoDB/AWS Database address with password and name
- ENV= development environment of the website
- FRONTENDPOINT= endpoint for accesing the frontend of the app

### Developer:
- Gabriel Valenzuela

## Setup

If you'd like to view the project locally in your browser:

-  `git clone https://github.com/Luizzmy/portfolio_viewer.git` in your terminal
-  `cd portfolio_viewer`
-  `cd backend`
-  `npm run dev`
-  Open another terminal window
-  `cd portfolio_viewer`
-  `cd frontend`
-  `npm start`

Cheers!
