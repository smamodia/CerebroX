import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      {/* Title */}
      <title>Login Page</title>

      {/* Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Login and Signup Page for our Application" />

      {/* External Stylesheets */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@2.1.2/css/boxicons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      />
    </Helmet>
  );
};

export default Head;
