# PERN Stack Template with TypeScript, Prisma, PostgreSQL, and Supabase

This is a PERN stack template with TypeScript, Prisma, PostgreSQL, and Supabase integration.

## Installation Instructions

1. Clone the repository.

2. Change directory into the project.

3. Install dependencies for both server and client.

```bash
cd server && npm install
cd ../client && npm install
```

4. Create a `.env` file in the server directory and add your Supabase configurations.

```
NODE_ENV=development

SUPABASE_URL=<your-supabase-url>
SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

5. Set up your PostgreSQL database on Supabase and create a table called test.

6. Start the server and client in separate terminals.

server: 

```bash
cd server && npm run dev
```

client: 

```bash
cd client && npm start
```

7. Your browser should open http://localhost:3000 and render a page with the window/tab title "PERN + TypeScript App" and a heading "PERN STACK TEMPLATE APP!"

8. Navigate to http://localhost:8000/api/test in your browser to confirm the connection to the database. If successful, you should see the expected response data in json format within the browser, otherwise, an error message will be returned. The endpoints can be removed from the router and app.ts file, and the table can be removed thereafter since they only serve for demonstration purposes. 

