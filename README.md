# Monitor Dashboard

## Project Backgroung & Introduction

UTDesign is a program created by the University of Texas at Dallas (UTD) to provide students with real-world, hands-on experience by collaborating with industry sponsors on engineering and computer science projects. Launched in 2009, UTDesign aims to bridge the gap between academic learning and practical application by allowing students to work in teams on projects that solve real industry problems. It began as a senior capstone initiative for engineering students and has since expanded to include a variety of disciplines, including computer science and BMEN.
The mission of UTDesign is to prepare students for the professional world by developing their problem-solving, teamwork, and project-management skills in a practical environment. Through partnerships with companies, agencies, and nonprofits, the program also seeks to foster innovation while providing a valuable resource for industry sponsors. Ultimately, UTDesign aims to create a mutually beneficial relationship where students gain experience and sponsors receive innovative solutions to their challenges.
We want to create an easy-to-use and dependable dashboard web app that has an access control list, admin page, etc to add/remove users. It should have the capability to display images, videos, and web pages across monitors in SPN. It should store previously used "Dashboards" for future use as either shared or private (for each user). It will be able to manage attached devices (Raspberry Pi). It should display a list of active devices along with the name of the Dashboard assigned to them on the home page. It must allow for editing of existing Dashboards (including the flag for shared/private).


### Admin:
  
  - Ability to view all current users
  - Ability to add new users
  - Ability to add other admins
  - Ability to remove users
  - Ability to remove shared dashboards                                               

### User:
  - Allow Users to edit their Dashboard
  - Allow Users to delete a specific dashboard
  - Allow User to go back to the home page
  - Allow User to make their own dashboard
  - Give Users option to edit their own dashboard
  - Users can edit the duration of the slide
  
## Functional Requirements

  ##### Admin Page
    - This page is only available to Admin
    - Allows admin to add Users
    - Allows Admin to see the current Users
    - Allows admin to see the Dashboard, with the Shared Dashboard button
    - Allows admin to remove the shared Dashboard
    - Users can send the dashboard to send Raspberry Pi



  ##### Edit Dashboard Page
    - Page is available to users and admin
    - Ability to edit which dashboard you want to display
    - Page has Button for Edit, Other and Delete
    - Other Button can allow you to post, preview, and rename the dashboard if needed
      - Clicking post will redirect you to another page that will post the slide
      - Clicking preview will redirect you to another page, allowing to show you the link you entered to preview
      - Rename redirects users to a new page to enter a new name for the dashboard
    - Displays the Image, website, or URL that the  user wants to display on the page

  ##### Dashboard List Page
    - Allows users to add a dashboard
    - Allows users to delete the dashboards that users select
    - Displays button for Home, and Login if user needs to redirect back
    - Button that says back redirecting them to the last page
    - Page is available to users, not admins
    

  ##### Dashboard Page
    - This page is where it allows users and admins to present
    - Button to allow users to edit, if needed, to fix any errors they may have
    - Button to present to display on the monitors
    - Page is available to users and admin

  ##### Current-Users Page
    - Page is only available to admin
    - Page allows Admin to see the current users currently logged into the monitor dashboard
    - Admin has the ability to delete, add, and edit any given user


## Third-Party Integrations
  - Auth0, An API that allows for authentication, and users and admins to sign in saving their account on the webapp



# Tech Stack

  ##### Frontend Frameworks
        - Node.js (Package Manager)
        - Vue.js  (Frontend Javascript Framework)
        - Tailwind CSS (Styling Framework)
        - Pug (HTML Styling )
  ##### Backend Frameworks
        - Nuxt.js(Framework for handling Backend)
  ##### Database
        - SQLite (Database)
        - Primsa (Helps write SQLite)
  
        
## Instructions for setting up the development environment

# How the Raspberry Pi's work with our website
```mermaid
graph TD;
  A["Raspberry Pi starts up"] --> B["script runs"] --> C["goes to its respective page on our website"] --> D["Pi is redirected to a generated URL (when the Dashboard is sent to the Device) present the Dashboard stored in our website"] --> E["When the Device is done presenting the Dashboard, it redirects to its specific page to present its Dashboard again"] --> C
```
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.


## Setup
Clone repsitory

Copy .env into root or fill out new keys from .env.example

Need Private keys/info for
  - Auth0
Make sure to install the dependencies (node_modules):

```bash
# npm
npm install

# pnpm
pnpm install
```
## Initialize Database

Initialize Postgres DB via

- npx prisma generate
- npx prisma migrate dev
- npx prisma studio
Open the generated localhost:5555 if you aren't automatically taken to it
  - localhost:5555
Add first user with prisma studio with valid email that you can use

## Development Server
Start the development server on `http://localhost:3000`:
```bash
# npm
npm run dev
```

## Production
  Build the application for production
   - npm run build
  Locally Preview Production build:
  - npm run preview

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
## Interacting with site
  - Log in via the 'Login' button and use Auth0, after you are invited
