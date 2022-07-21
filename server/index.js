const express = require('express');
const app = express();
const colors = require('colors');
const PORT = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const connectDB = require('./config/db');
require('dotenv').config();
connectDB();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, console.log(`port running on port: ${PORT}`));