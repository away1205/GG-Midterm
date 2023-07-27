# Tokopedia Play Clone API

This is mid term project in Generasi GIGIH 3.0

## Table of Contents

- [Database Structure](#database-structure)
- [API Structure](#api-structure)
- [API Endpoints](#api-endpoints)
- [How to Run Locally](#how-to-run-locally)
- [Deployment](#deployment)

## Database Structure

Here is the structure of the database, including the relationships between entities (e.g., Video, Product, Comment). Mention the key fields and their data types for each model in your database. Here is an example:

- `Video` Model:
  - `url_thumbnail`: String (required) - URL of the video thumbnail.
  - `title`: String (required) - Title of the video.
  - `username`: String (required) - Username of the video creator.
  - `views`: Number (default: 0) - Number of views for the video.
  - `list_products`: Array of ObjectIds (references `Product`) - List of products associated with the video.
  - `list_comments`: Array of ObjectIds (references `Comment`) - List of comments associated with the video.

- `Product` Model:
  - `video`: ObjectId (references `Video`) - Video to which the product belongs.
  - `title`: String (required) - Title of the product.
  - `link`: String (required) - Link to the product.
  - `price_IDR`: Number (required) - Price of the product in Indonesian Rupiah (IDR).

- `Comment` Model:
  - `video`: ObjectId (references `Video`) - Video to which the comment belongs.
  - `username`: String (required) - Username of the commenter.
  - `comment`: String (required) - Comment text.
  - `timestamp`: Date (default: current timestamp) - Timestamp of when the comment was made.

- `User` Model:
  - `username`: String (required) - Username of the user.
  - `profile_picture`: String (default: 'dummy') - URL of the user's profile picture.

## API Structure

The API follows a RESTful structure and is organized into the following components:

- `routes`: Contains the route definitions for the API endpoints.
- `controllers`: Contains the logic to handle API requests and responses.
- `services`: Contains the business logic to interact with the database and perform CRUD operations on models.
- `models`: Contains the Mongoose schema definitions for the database models.

The flow of data in the API is as follows: HTTP requests are received by the routes, which then call the corresponding controller functions. The controllers interact with the services to perform operations on the database models and retrieve data. Finally, the controllers respond with JSON data to the client.

## API Endpoints

The API provides the following endpoints:

| Endpoint                | Method | Request Body                                           | Response Body                                     | Description                   |
|-------------------------|--------|--------------------------------------------------------|---------------------------------------------------|-------------------------------|
| `/api/videos`           | GET    | N/A                                                    | `{ status: 'success', list_videos: [...] }`       | Get a list of video thumbnails |
| `/api/videos/:videoID`  | GET    | N/A                                                    | `{ status: 'success', detail_video: {...} }`     | Get details of a specific video |
| `/api/videos`           | POST   | `{ username: '...', title: '...', url: '...' }`      | `{ status: 'success', inserted_video: {...} }`   | Post a new video              |
| `/api/products/:videoID`| GET    | N/A                                                    | `{ status: 'success', list_products: [...] }`    | Get a list of products for a video |
| `/api/products/:videoID`| POST   | `{ title: '...', link: '...', price_IDR: ... }`      | `{ status: 'success', inserted_product: {...} }` | Post a new product for a video |
| `/api/comments/:videoID`| GET    | N/A                                                    | `{ status: 'success', list_comments: [...] }`    | Get a list of comments for a video |
| `/api/comments/:videoID`| POST   | `{ username: '...', comment: '...' }`                | `{ status: 'success', inserted_comment: {...} }` | Post a new comment for a video |
| `/api/users`            | POST   | `{ username: '...', profilePicture: '...' }`         | `{ status: 'success', created_user: {...} }`     | Create a new user             |

## How to Run Locally

To run the application locally on your machine, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project folder:
   ```
   cd <project-folder>
   ```

3. Install dependencies using npm or yarn:
   ```
   npm install
   ```

4. Set up environment variables (if required) by creating a `.env` file in the root folder and defining the necessary variables (e.g., `PORT`, `MYDATABASE_URL`.).

5. Start the server:
   ```
   npm start
   ```

6. The API should now be running locally at `http://localhost:3000` or the specified `PORT`.

Note: Make sure you have Node.js and MongoDB installed on your machine before running the project locally.

## Deployment

The project is deployed and accessible at the following link:
[https://tokopedia-play-clone.cyclic.app/](https://tokopedia-play-clone.cyclic.app/)
