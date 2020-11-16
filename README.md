# soundclout-comments

You will need to install MySQL or MariaDB.

Initialize the database by:

1. Manually creating a database and a user, or
2. Run the SQL init script to initialize MySQL with a database and a user.

Be sure to give proper permissions to the new user. The SQL init script will set all permissions for 'hrr49-user'

Install the dependencies
```
npm install
```

After the database is set up, run the migrations
```
npm run migrate
```

Populate the database with seed data
```
npm run seed
```

Build the client application
```
npm run build
```

Start the server
```
npm start
```

By default, the application will be available at `http://127.0.0.1:8080/`

## Environment Variables

You will need to set the following environment variables
```
NODE_ENV
DB_HOST
DB_USER
DB_PASS
DB_NAME
```