# Starter React App

This is a starter React application built with the latest standards and TypeScript. The application includes user authentication, task management, and a point system.

## Features

- **User Authentication**: Users can sign in using Firebase Authentication. See `src/components/Authentication.tsx` and `src/utils/firebase.ts` for implementation details.

- **Task Management**: Users can create recurring tasks that are displayed in a grid. Each task is worth a certain number of points (1, 3, or 5), as determined by the user. See `src/components/Task.tsx`, `src/components/TaskGrid.tsx`, and `src/utils/taskUtils.ts` for implementation details.

- **Streaks and Points**: Users earn points by completing tasks. Completing two tasks per day counts towards a streak, and maintaining a streak adds 1 point per day. Saturdays and Sundays do not break streaks. See `src/components/Streak.tsx` and `src/utils/streakUtils.ts` for implementation details.

- **Penalties**: Failing to complete a task incurs a penalty. See `src/utils/pointUtils.ts` for implementation details.

- **User Profile**: The user profile displays the user's total points. See `src/components/UserProfile.tsx` for implementation details.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up Firebase Authentication and update the `.env` file with your Firebase credentials.
4. Run the application with `npm start`.

## Testing

Run tests with `npm test`.

## Building

Build the application for production with `npm run build`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)