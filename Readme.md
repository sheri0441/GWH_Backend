# GWH_Backend

This is backend of my E-commerce Website. The website built with React on frontend and node.js + express.js on backend.

## Table of Contents

- [GWH_Backend](#gwh_backend)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Installation](#installation)
  - [TypeScript Command](#typescript-command)
  - [Environment Variables](#environment-variables)
  - [Features](#features)
  - [API Documentation](#api-documentation)
  - [License](#license)

## About

This is a simple backend for a web application that handles products, user and order. And also send email notifications to users when they make an order, contact or want to delete their account.

## Installation

To install the backend, you need to have Node and npm installed on your machine.

```bash
npm install
```

## TypeScript Command

```bash
tsc --watch
```

for watch changes in ts file

```bash
tsc --build
```

for build ts file to js file

## Environment Variables

This section lists the environment variables used in the project.

- `DATABASE_URL`: The URL for connecting to the database to prisma.
- `AUTH0_AUDIENCE`: The audience for Auth0 authentication.
- `AUTH0_BASE_URL`: The base URL for Auth0 authentication.
- `AUTH0_TOKEN_ALG`: The algorithm used for Auth0 token verification.
- `NODEMAILER_SMTP`: The SMTP server for NodeMailer.
- `NODEMAILER_USER`: The user email for NodeMailer authentication.
- `NODEMAILER_PASS`: The password for NodeMailer authentication.
- `FRONTEND_URL`: The URL for the frontend application.
- `PERSONAL_EMAIL`: The personal email address.
- `STRIPE_WEBHOOK_SECRET`: The secret key for Stripe webhook.
- `STRIPE_SECRET_KEY`: The secret key for Stripe API.
- `PORT`: Specify the port you are running your server.

## Features

- Integrated with Prisma for database management (@prisma/client)
- Type definitions for Express (@types/express)
- Type definitions for Nodemailer (@types/nodemailer)
- HTTP client for making requests (axios)
- CORS middleware for Express (cors)
- Environment variable management (dotenv)
- Web server framework for Node.js (express)
- OAuth2 JWT Bearer token middleware (express-oauth2-jwt-bearer)
- Utility for generating unique IDs (generate-unique-id)
- Node.js module for sending emails (nodemailer)
- Stripe API client (stripe)
- Validation library (valibot)

## API Documentation

This section provides details about the different routes available in the API.

- GET /categories -- Retrieve a list of all categories.
- POST /contacts -- Send a contact form message.
- POST /orders/cash -- Create a new order with cash payment.
- POST /orders/card -- Create a new order with card payment.
- GET /orders/:orderNumber -- Retrieve details of a specific order.
- GET /products/page/:page -- Retrieve a list of products by page number.
- GET /products/id/:id -- Retrieve a product by its ID.
- GET /products/category/:category/:page -- Retrieve a list of products by category and page number.
- GET /products/search/:search -- Search for products upto 5 max by keyword.
- GET /products/searchpage/:search/:page -- Search for products by keyword for a specific page.
- GET /products/featured -- Retrieve a list of featured products. Which is 4 max.
- GET /products/recent -- Retrieve a list of recently added one product.
- POST /products/cart -- Retrieve a list of products that are in the cart.
- POST /users -- Create or update user information and their shopping cart.
- PUT /users/cart -- Update the user's shopping cart.
- DELETE /users -- Send notification to the owner to delete the user.

## License

ISC
