
## BooKShelf Master Documentation

## 
Client site Code Link:https://github.com/Porgramming-Hero-web-course/b8a11-client-side-muddasirfaiyaj66

Server Site Code Link: https://github.com/Porgramming-Hero-web-course/b8a11-server-side-muddasirfaiyaj66

Client live link: https://bookshelf-master.web.app/

Server Live Link :https://bookshelf-master-server.vercel.app/

## 🚀 Introduction
Welcome to the documentation for the BookShelf  Master! This document outlines the key features and functionality of the website.


## Features

- Implement user authentication to ensure that only valid users can access the system. Users should be able to register, log in, and reset their passwords if necessary.

- Allow registered users to borrow books from the collection and return them when they are done. Track the status of each book to prevent over-borrowing and ensure availability.

- Users should be able to add books to their personal bookshelves and remove them as desired. These actions should be private to the user, ensuring their privacy and customization..

- Protect the "add," "delete," and "update" operations on the book collection to prevent unauthorized access. Only authorized administrators or librarians should have access to these actions. Additionally, implement safeguards to prevent the deletion of borrowed books, such as automatically returning them to the collection if a user attempts to delete a borrowed book.

- When a user registers or logs in, issue a JWT token to authenticate them. This token should include information such as the user's ID, username, and an expiration timestamp.
- Whenever a user makes a request to the server, validate the JWT token to ensure that the user is authenticated. Check the token's signature and expiration time to prevent unauthorized access.

- Implement a token refresh mechanism to allow users to obtain a new JWT token without needing to re-enter their credentials. This can help maintain user sessions and security.


## Admin
email: admin@gmail.com
pass: admin1234@#A


