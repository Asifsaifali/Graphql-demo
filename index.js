const express = require('express')
const { expressMiddleware } = require('@apollo/server/express4')
const { ApolloServer, gql } = require("@apollo/server")
const axios = require('axios')
const UserRepository = require('./src/repository/UserRepository')

// const server = new ApolloServer({
//     typeDefs: `

//     type User{
//         id : ID!
//         name : String!
//         email : String!,
//         phone : String!,
//         website : String!
//     }
//         type Todo{
//             id : ID!,
//             title : String! , 
//             completed : Boolean!,
//             UserId : ID!
//             user : User
//         }

//         type Query{
//             getTodos : [Todo]
//             getAllUsers : [User]
//             getUser(id : ID!) : User
//         }
//     `,
//     resolvers: {
//         Todo: {
//             user: async (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`)).data,
//         },
//         Query: {
//             getTodos: async () => (await axios.get('https://jsonplaceholder.typicode.com/todos')).data,
//             // getAllUsers: async () => (await axios.get('https://jsonplaceholder.typicode.com/users')).data,
//             getAllUsers: () => [
//                 {
//                     id: 1,
//                     name: "John Doe",
//                     email: "johnDoe@example.com",
//                     phone: "123-4" + "56789012",
//                     website: "www.johndoe.com",
//                 },
//                 {
//                     id: 2,
//                     name: "Asif saif",
//                     email: "asif@example.com",
//                     phone: "9661-4" + "56789012",
//                     website: "www.asifsaif.com",
//                 }
//             ],
//             getUser: async (parent, { id }) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data,
//         }
//     },
// })

const app = express();
var bodyParser = require("body-parser")
app.use(bodyParser.json())

async function StartServer() {
    // await server.start()
    // app.use('/graphql', expressMiddleware(server))
    const repo = new UserRepository()
    await repo.createUser({
        id: 1,
        name: "asif",
        email: "asif@gmail.com",
        password: "asif@123"
    })
    if (!repo) {
        console.log("Something went wrong");
    } else {
        console.log("Data inserted Successfully");
    }

    app.listen(8001, () => {
        console.log("Server started at PORT 8001");
    })
}

StartServer()