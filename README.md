# recruitment-event

Since I don't like doing things without a real-world purpose I made this recruitment task a little bit more practical. I created a fully functional esport tournament registration page with admin panel.

Overkill? Yeah... 🤦‍♂️

Not gonna lie here. I based some parts of this project on one of my earlier esport projects which allow you to register to different user-defined (through admin interface ofc) tournaments.

## Technologies & tools used
* ReactJS (webpack 5, babel, sass, hooks, context api, router, react-calendar, fetch)
* NodeJS (ExpressJS, sessions, AdminBro, regex, mongoose, MongoDB)
* NGINX (reverse-proxy)
* Docker (app containers connected in one network, gateway exposed to the host machine)



## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
* Docker
* docker-compose
* node & npm 

### Installation

* clone the repository
  ```sh
  git clone https://github.com/mannhattan/recruitment-event
  ```

* navigate to project directory
  ```sh
  cd recruitment-event
  ```

* run with docker-compose
  ```sh
  docker-compose up --build
  ```


### Usage
##### Routes:

Whole app binds to a `localhost` address and has these routes (managed by gateway):

* `/` - frontend app
* `/admin` - admin panel (default login: admin | default password: admin)
* `/api` - backend api

##### Further development:

Whole app requires some tweaks & upgrades:

* rewriting config files, making two main configs for everything (production and development)
* expanding docker-compose.yml with production and development configs
* adding minor fixes like page titles etc.
* simplify naming conventions (maybe?)
* replacing kinda cumbersome sass styling to one of more elegant solutions like CSS-IN-JS

* other project part-specific things:
  1. admin:
      * rewriting authentication system to be able to manage admin panel accounts (and not use static credentials as it is now)
  2. backend:
      * adding solid access control to api endpoints (currently it's a simple static access key)
      * figure out a way to consider client timestamps when saving records to database
  3. frontend:
      * making better use of store - fetch data about current tournament from backend etc.
      * add form validation error descriptions (not only colored alerts)
      * creating at least basic frontend validation before sending data to backend
      * distributing registration page to smaller components
      * making better use of react router - maybe make a tournament page? (currently using only one route)
  4. database:
      * create user specifically for the app with access to only one database (not a root as it is now)
  5. gateway:
      * adding ssl certificates


### Summary

Overall I thing that for around 20 hours (that I spent on developing this project) it's an honest work. Obviously I had to cut some corners here and there to make it in time but that's nothing a solid 2 days of work more wouldn't fix.