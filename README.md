# Project Name

RemoteDeck

## Description

RemoteDeck is a platform that connects developers with remote job opportunities across the globe. It's designed to help developers find work from anywhere, and to help companies find top talent without being limited by location.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with RemoteDeck, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/your-username/remotedeck.git`.
2. Install the necessary dependencies by running `npm install`.
3. Configure the database connection in `src/config/db.config.ts`. You can use MongoDB or another database of your choice.
4. Generate a JWT secret key by running `openssl rand -base64 32` and replace the value in `src/config/auth.config.ts`.
5. Run the application by running `npm run start:dev`.

The application will be accessible at `http://localhost:3000`.

## Features

RemoteDeck provides the following features:

- Job search
- Job filtering and sorting
- Job details
- Application tracking
- Resume builder
- Company profiles
- Authentication and authorization

## Technologies

RemoteDeck was built using the following technologies:

- NestJS
- Elasticsearch
- MongoDB
- Angular
- Bootstrap
- JSON Web Tokens

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork this repo.
2. Create a new branch.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to the new branch.
5. Submit a pull request.

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](/LICENSE) file for more details.