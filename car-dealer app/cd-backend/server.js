const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const { graphqlHTTP } = require('express-graphql');
const newCarSchema = require('./schema');
const resolvers = require('./resolver');
const cors = require('cors');
const app = express();

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,
    useUnifiedTopology: true,
    },  
    () => console.log("Connected to DB")
    );

app.use(cors({origin: ["http://localhost:3000"]}));
app.use('/graphql', graphqlHTTP({
        schema: newCarSchema,
        graphiql: true,
        rootValue: resolvers
    }));

app.listen(5500, () => console.log('Server running on http://localhost:5500/graphql'));