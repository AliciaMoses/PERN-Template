import dotenv from 'dotenv';
import createApp from './app';

// Load environment variables from the .env file
dotenv.config();

// Create the Express.js app
const app = createApp();

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
