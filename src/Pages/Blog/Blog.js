import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 p-8 m-8 rounded-md text-center w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold'>Q-1:Difference between SQL and NoSQL</h1>
                <p><b>Ans:</b>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='border-2 p-8 m-8 rounded-md text-center w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold'>Q-2:What is JWT, and how does it work?</h1>
                <p><b>Ans:</b>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token's issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.</p>
            </div>
            <div className='border-2 p-8 m-8 rounded-md text-center w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold'>Q-3:What is the difference between javascript and NodeJS??</h1>
                <p><b>Ans:</b>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='border-2 p-8 m-8 rounded-md text-center w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold'>Q-4:How does NodeJS handle multiple requests at the same time??</h1>
                <p><b>Ans:</b> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;