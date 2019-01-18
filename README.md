# ratingApp

A rating app that rate a bank branch or region base on performance.

API Endpoint: https://rating-app-task.herokuapp.com/api/v1

# Technologies Used

- Backend: Node/Express
- Postgres
- Libaries: Es6, Babel-CLI, eslint, express

# Features

- User can post rating from 0 to 5 puting in other required field
- User can get all ratings.
- User can get all ratings for a particular branch by brand_id.
- User can get all ratings for a particular region by region.
- User can get Average Star ratings for a particular branch by brand_id
- User can get Average Star ratings for a particular region by region

## API Endpoints

| Endpoint                            | Functionality                                     |
| ----------------------------------- | ------------------------------------------------- |
|                                     |                                                   |
|                                     |                                                   |
| GET /rating                         | Fetch all available ratings                       |
| GET /rating/\?<branch_id>=123       | Fetch the star ratings of a single branch         |
| POST /rating/                       | Create a rating                                   |
| GET /rating/\?<region>=West-central | Fetch the star ratings of a single region         |
| GET /rating/\<branches>/branch_id   | Fetch the average star ratings of a single branch |
| GET /rating/\<regions>/south-west   | Accept or Reject a ride request                   |

# To Install

- Download or clone
- Open terminal inside the root directory of clone folder
- Type npm install to install all dependencies
- npm start to run the app
- npm run start:dev to run development environment

##

API Endpoint: https://rating-app-task.herokuapp.com/api/v1

## AUTHOR

[Valentine Ezeh](https://github.com/valentineezeh/ratingApp)
