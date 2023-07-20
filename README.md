# OpenTable Clone

This is a clone of the OpenTable service, which allows users to search and make reservations at restaurants.

## Features

- **Restaurant Search:** Users can search for restaurants based on various criteria such as location, cuisine, and price range.

- **Restaurant Listings:** Users can view a list of restaurants that match their search criteria, including information such as restaurant name, location, cuisine, and average rating.

- **Restaurant Details:** Users can click on a restaurant to view more detailed information, including restaurant photos, menu, reviews, and available reservation times.

- **Reservation Booking:** Users can book a reservation at a restaurant by selecting a date, time, and number of guests. They can also add special requests or preferences during the booking process.

- **User Authentication:** Users can create an account, log in, and manage their reservations. Authenticated users can view their reservation history, modify or cancel existing reservations, and save favorite restaurants.

- **Reviews and Ratings:** Authenticated users can leave reviews and ratings for restaurants they have visited. They can also view and filter reviews left by other users.

- **Responsive Design:** The application is designed to be mobile-friendly and responsive, providing a seamless experience across different devices and screen sizes.

## Technologies Used

- **Front-end:** React, [Next.js](https://nextjs.org), HTML, CSS, JavaScript, [Material UI](https://mui.com/material-ui/)
- **Back-end:** [Node.js](https://nodejs.org), Express.js
- **Database:** PostgreSQL (with [Supabase](https://supabase.com) as a database provider)
- **Authentication:** JSON Web Tokens (JWT)
- **Third-Party APIs/Packages:** [Axios](https://www.npmjs.com/package/axios), [Prisma](https://www.prisma.io), [cookies-next](https://www.npmjs.com/package/cookies-next), [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), [validator](https://www.npmjs.com/package/validator), [Postman API Desktop](https://www.postman.com/downloads/postman-agent/) (for testing)
- **Deployment:** [Vercel](https://vercel.com)

## Getting Started

To get started with the OpenTable clone, follow these steps:

1. Clone the repository: `git clone https://github.com/pewaukee/open-table-clone.git`

2. Install dependencies: `cd opentable-clone` and run `npm install` or `yarn install`

3. Set up the environment variables: Rename `.env.example` file to `.env` and update the required values such as API keys, database connection strings, etc.

4. Start the development server: Run `npm run dev` or `yarn dev` to start the development server.

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you would like to contribute to the OpenTable clone project, please follow these steps:

1. Fork the repository and create a new branch for your feature or bug fix.

2. Make your changes and test thoroughly.

3. Commit your changes with a descriptive commit message.

4. Push your changes to your forked repository.

5. Submit a pull request to the main repository, explaining your changes and the problem it solves.

6. Wait for feedback and iterate on the changes if necessary.

## Deployment

Assuming you have forked this repo, deployment to [vercel](https://vercel.com) requires one extra step: once creating a project on vercel with this repo, you need to add the following environment variables in vercel's settings, like so:

```
NEXT_PUBLIC_API_URL={VERCEL_URL}
```

Check out more information on [vercel's documentation](https://vercel.com/docs/environment-variables) about environment variables.

This can correspond to the URL given by vercel not generated on each commit, but the one generated permanently for the project. We need to set this in order to access our built in API routes. The prefix of `NEXT_PUBLIC_` is required for the variable to be accessible in the client. In my example, the URL is the following: `https://open-table-clone-kappa.vercel.app/`. The URL will be different for you, so make sure to use the one generated for your project.
## License

This project is licensed under the [MIT License](LICENSE).
