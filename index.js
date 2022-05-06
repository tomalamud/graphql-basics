'use strict'
const{ buildSchema, graphql } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');

const app = express();
const port = process.env.PORT || 3000;

// defining schema
const schema = buildSchema(readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8'))

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(port, () => {
  console.log(`server is listening at: http://localhost:${port}`);
})

// Exec
graphql({
  schema,
  rootValue: resolvers,
  source: '{ hello }',
}).then((data) => {
  console.log(data);
});
