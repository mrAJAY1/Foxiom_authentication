# Client side social Authentication in React.

## Setup and Run the app

1. Clone the Repo
2. Install dependencies
   ```
   npm install
   ```
3. Run dev server
   ```
   npm run dev
   ```

This app includes:
1. Google Authentication.
2. Linkedin Authentication.
3. Responsive login form.

4. Utilisation of custom hooks and Context API.
5. Tailwind CSS.
----------------------------------------------------------------
> **_NOTE:_** App is made by assuming that the backend has separate endpoints for social auth and the tokens are sent in httponly cookies. To mock the result, uncomment the NOTE anchor comment in `useAuth` hook.
----------------------------------------------------------------

## Info:

1. Check `.env.example` for env references

2. Vite proxy is set to assume the backend is running on port 3000. see `vite.config.js`

3. Expects the backend to send authentication tokens in http only cookies.
