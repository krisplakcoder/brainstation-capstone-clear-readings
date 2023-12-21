Book Tracker

My capston project will be a website that tracks reading habits by keeping records of what the user reads. It also stores records of the user's current physical and digital book collection as well as their favorite books, which the website will use to recommend books.

The website would assist users to develop a love for reading and map out their literary interests. 

Avid readers are the target audience for the app. 

The app will:
    - Store a record of the user's book collection
    - Keep track of the user's progress in a book
    - Place the user's favorite books in a list
    - Recommend books based on the user's favorite books

The following technologies will be utilized to develop the app:

    - HTML
    - SCSS
    - JavaScript
    - React/Vite
    - Express
    - Node
    - Knex
    - MySQL
    - Git/Github

Data for the books are intended to be gathered from:

    - The Internet Archive Book Database
    - Google Books
    - ChatGPT/OpenAI

The website will open to the home page. Here, the user will see a hero image of the book they're currently reading besides their reading list. By clicking the image, they will be taken to the book page where they can update their progress, which will be measured in chapters. 

The website's header will contain links to a list of the user's favorite books and a page where they can enter new books to their reading lists. 

The footer will show the user's reading statistics, including the number of books they have read, and a few recommended books based on what the user is currently reading. 

Pages:

    - Home Page
    - Single Book Page
    - Library
    - Add a book page

Data from external sources will comprise of book descriptions, authors, images, and ISBN numbers. It will be utilized into lists that will showcase the user's personal library and recommended readings. 

The following endpoints are going to be used:

    GET /books - the response from this endpoint will return a list of recommended   books from the ChatGPI/OpenAI API 

    GET /library - this will procure the user's personal library

    POST /library -  this will add a new book to the user's personal library

    PUT /library/:id - this will add a book to the user's favorite list

    DELETE /library/:id - thie will remove a book from the user's personal library


The project won't include a login page or auth functionality. However, it may be included.


Roadmap

    1. Set up and test APIs on the backend
    2. Implement REST API on the front end 
    3. Design the mobile, tablet, and desktop modes for the home page
        using mock data

        a. Develop the header and footer in all three modes
        b. Develop the hero section in all three modes
        c. Develop complimentary sections like the recommendations 
            and reading lists 
    
    4. Design a page for a single book in all three modes

        a. Reuse footer and header sections from home page
        b. Develop the hero section and modify it to include
            a description of the book and its ISBN number

    5. Set the routes, links, and relative props using React-Router-Dom

    6. Test front-end functions with data from the backend using MySQL and Knex

    7. Record faults and determine ways to resolve them

    8. Perform final tests on the website

    9. Push final code to main and delete feature branches on git
    

Nice to haves

    - A section where users could write their reflections on a book
    - Social media integration
    - Links to local stores and libraries that sell or lend a book the user 
        is interested in
    - Login page
    