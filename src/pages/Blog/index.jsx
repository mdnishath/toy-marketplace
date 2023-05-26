import React, { useEffect } from "react";
import Container from "../../components/Shared/Container";

const Blog = () => {
  useEffect(() => {
    document.title = "CAR GALAXY || Blog ";
  }, []);
  return (
    <div>
      <Container>
        <div className="my-8">
          <div className="grid grid-cols-1 w-[960px] mx-auto gap-4">
            <div className="shadow-all p-6 rounded-lg">
              <h1 className="text-xl font-semibold bg-white px-4">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h1>
              <br />
              <p>
                Access Token and Refresh Token are two commonly used tokens in
                token-based authentication systems.
              </p>
              <br />
              <p>
                An access token is a credential that is used to access protected
                resources on behalf of a user. It is typically short-lived and
                contains information such as the user's identity and
                permissions. Access tokens are issued by an authentication
                server (such as OAuth provider) after the user has successfully
                authenticated and authorized the client application. The client
                application includes the access token in each request to the
                server to authenticate and authorize access to protected
                resources.
              </p>
              <br />

              <p>
                A refresh token is a long-lived token that is used to obtain a
                new access token without requiring the user to reauthenticate.
                It is issued along with the access token and is stored securely
                by the client application. When the access token expires, the
                client application can send the refresh token to the
                authentication server to obtain a new access token. This allows
                the user to stay logged in without having to enter their
                credentials again.
              </p>
            </div>
            <div className="shadow-all p-6 rounded-lg">
              <h1 className="text-xl font-semibold bg-white px-4">
                Compare SQL and NoSQL databases?
              </h1>
              <br />

              <p>
                SQL (Structured Query Language) and NoSQL (Not only SQL) are two
                different types of database management systems that serve
                different purposes. SQL databases are primarily based on the
                relational model and use tables to store structured data. They
                have a predefined schema that enforces data consistency and
                integrity. SQL databases are known for their strong ACID
                (Atomicity, Consistency, Isolation, Durability) properties,
                which ensure transactional reliability. They are suitable for
                complex queries and data relationships, making them ideal for
                applications with structured data and well-defined schemas. On
                the other hand, NoSQL databases are designed to handle
                unstructured and semi-structured data, such as JSON, XML, or
                key-value pairs. They offer flexible schemas and allow for
                dynamic changes in data structure. NoSQL databases are
                horizontally scalable and can handle large volumes of data with
                high velocity. They prioritize scalability and performance over
                strong consistency, making them suitable for distributed systems
                and big data applications. In summary, SQL databases provide
                strong consistency, structured data modeling, and complex
                querying capabilities, while NoSQL databases prioritize
                scalability, flexibility, and handling unstructured data
                efficiently. The choice between SQL and NoSQL depends on the
                specific requirements of the application, data structure, and
                scalability needs.
              </p>
              <br />
            </div>
            <div className="shadow-all p-6 rounded-lg">
              <h1 className="text-xl font-semibold bg-white px-4">
                What is express js?
              </h1>
              <br />

              <p>
                Express.js, commonly referred to as Express, is a popular web
                application framework for Node.js. It provides a simple and
                minimalistic approach to building web applications and APIs.
                Express.js is known for its flexibility, modular architecture,
                and robust features, making it a go-to choice for developers.
              </p>
              <br />
            </div>
            <div className="shadow-all p-6 rounded-lg">
              <h1 className="text-xl font-semibold bg-white px-4">
                What is MongoDB aggregate and how does it work?
              </h1>
              <br />

              <p>
                MongoDB's aggregate is a powerful method used for data
                aggregation and analysis. It allows for complex data processing
                operations, such as grouping, filtering, and transforming data
                within a MongoDB collection. The aggregate function works by
                creating a pipeline of stages, where each stage represents a
                specific operation to be performed on the data. These stages can
                include operations like $match (filtering documents), $group
                (grouping documents), $project (selecting specific fields), and
                many more. The pipeline stages are applied sequentially, with
                the output of one stage serving as the input for the next. This
                enables developers to perform advanced data manipulations and
                calculations on large datasets efficiently, making MongoDB's
                aggregate a valuable tool for data analysis and reporting tasks.
              </p>
              <br />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
