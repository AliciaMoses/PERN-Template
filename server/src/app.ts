import express, { Express } from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import testRouter from "./routers/testRouter";

//import router from './routes/Router';

const createApp = (): Express => {
  // Initialize the Express.js app
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());

  // Connect to Supabase
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables"
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Routes
  app.use("/api", testRouter(supabase));

  return app;
};

export default createApp;
