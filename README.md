# React Micro-Frontend Application

This project is a React-based micro-frontend application with OIDC authentication.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Copy `.env.example` to `.env` and update the OIDC configuration:
   ```
   cp .env.example .env
   ```
   Then edit `.env` with your actual OIDC provider details.

4. Start the development server:
   ```
   npm run dev
   ```

## OIDC Configuration

Make sure to set up your OIDC configuration correctly in the `.env` file. The required variables are:

- `VITE_OIDC_AUTHORITY`: The URL of your OIDC provider
- `VITE_OIDC_CLIENT_ID`: Your client ID

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs the linter
- `npm run preview`: Previews the built app

## Troubleshooting

If you encounter OIDC-related errors, ensure that:
1. Your OIDC provider is correctly set up and running
2. The `VITE_OIDC_AUTHORITY` and `VITE_OIDC_CLIENT_ID` in your `.env` file are correct
3. Your OIDC provider allows requests from your application's origin (CORS settings)

For more detailed error information, check the browser console.