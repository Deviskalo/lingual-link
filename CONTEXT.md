# Context for LingualLink

## Overview

This codebase is a Next.js application designed for language translation services. It includes features for user authentication, translation history management, and various translation functionalities.

## Directory Structure

### `app/`

- **api/**: Contains API routes for handling requests related to translations, user authentication, and history management.
  - **auth/**: Handles user authentication (signup, login, etc.).
  - **history/**: Manages translation history, including fetching and deleting translations.
  - **translations/**: Contains logic for creating and retrieving translations.
  - **translate/**: Provides translation services using external APIs.

### `components/`

- **nav-bar.tsx**: The navigation bar component that includes links to different sections of the application and user authentication options.
- **theme-toggle.tsx**: A button component for toggling between light and dark themes.
- **theme-provider.tsx**: Wraps the application in a theme provider to manage theme state.
- **translation-history.tsx**: Displays the user's translation history and allows for deletion of individual translations.

### `lib/`

- **translations.ts**: Contains utility functions for managing translations, including creating, deleting, and fetching translation data from the database.

### `prisma/`

- **schema.prisma**: Defines the database schema for the application, including models for `User`, `Translation`, `Language`, and others.

### `pages/`

- **\_app.tsx**: Custom App component that wraps the application with providers for session management and theming.

## Environment Variables

- **DATABASE_URL**: Connection string for the MongoDB database.
- **NEXTAUTH_SECRET**: Secret used for NextAuth.js sessions.
- **GMAIL_USER**: Email address for sending emails (if applicable).
- **GMAIL_PASS**: Password for the Gmail account.
- **NEXTAUTH_URL**: URL for the NextAuth.js authentication.

## ESLint Configuration

The project uses ESLint for linting JavaScript and TypeScript code, with specific rules to enforce coding standards and best practices.

## Next.js Configuration

The `next.config.mjs` file includes settings for ESLint integration and CORS headers for API routes.

## Usage

To run the application, ensure that all environment variables are set in the `.env` file, and then use the following commands:

1. Install the necessary dependencies by running:

   ```
   npm install
   ```

2. Start the development server with:

   ```
   npm run dev
   ```

3. Access the application in your browser at `http://localhost:3000`.

4. For production builds, run:
   ```
   npm run build
   npm start
   ```

Make sure to check the console for any errors during startup and resolve them as needed.
