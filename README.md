# Book Management API

A simple CRUD book app built with Next and Typescript

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

The server will start on `http://localhost:3000`.

## API Endpoints

- `GET /api/books`: Retrieve all books
- `POST /api/books`: Create a new book
- `GET /api/books/[id]`: Retrieve a single book
- `PUT /api/books/[id]`: Update a book
- `DELETE /api/books/[id]`: Delete a book

## API Documentation

Swagger documentation is available at `http://localhost:3000/api-docs`.

## Example Requests and Responses

### Create a Book(POST)

Request:

```http
POST /api/books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "summary": "A novel about the American Dream in the Jazz Age."
}

Response:
{
  "title": "Happiness",
  "author": "Happy Man",
  "publishedDate": "1925-04-10",
  "summary": "A happy novel."
}

```

### Get All Books (GET)

Request:
GET /api/books

Response:
[
{
"id": "asdd-bewgqh-helloaworkds",
"title": "Blue World",
"author": "Mr Bee",
"publishedDate": "2024-04-10",
"summary": "A great book."
},
{
"id": "xbjbcxjb-jsijaih0ewqweq",
"title": "What is Life?",
"author": "Crybaby Adult",
"publishedDate": "2007-07-11",
"summary": "A sad book."
}
]

### Get single book by id (GET)

Request:
GET /api/books/[id]

Response:
{
"id": "xbjbcxjb-jsijaih0ewqweq",
"title": "What is Life?",
"author": "Crybaby Adult",
"publishedDate": "2007-07-11",
"summary": "A sad book."
}

### Update a book by id (PUT)

Request:
PUT /api/books/1
Content-Type: application/json

{
"id": "xbjbcxjb-jsijaih0ewqweq",
"title": "What is Life?",
"author": "Crybaby Adult",
"publishedDate": "2007-07-11",
"summary": "A sad book."
}

Response:
{
"id": "xbjbcxjb-jsijaih0ewqweq",
"title": "What is Life?",
"author": "Crybaby Adult",
"publishedDate": "2007-07-11",
"summary": "A sad book."
}
