
# Breadit 🍞 - A Reddit Clone


Breadit is a modern, fast, and interactive Reddit clone that brings a fresh twist to the world of online communities. Built using cutting-edge technologies such as Next.js 13, Prisma, MySQL, Tailwind CSS, and Redis for caching, Breadit offers a delightful user experience with its seamless performance and visually appealing design.

Join the Breadit community and experience the next generation of online discussions. Happy breadting! 🍞


## Features

- Next.js 13: Breadit leverages the power of Next.js 13, a highly efficient and versatile framework, to deliver fast and dynamic web pages. With its built-in server-side rendering (SSR) capabilities, Next.js ensures optimal performance and SEO-friendly content.

- Prisma: Breadit integrates Prisma, a modern database toolkit, to provide a robust and scalable data layer. Prisma simplifies database operations by offering a type-safe and intuitive API, allowing you to focus on building features rather than dealing with complex SQL queries.

- MySQL: Breadit utilizes MySQL as its database management system, ensuring reliable data storage and retrieval. MySQL's stability, security, and performance make it an ideal choice for handling large amounts of structured data.

- Tailwind CSS: Breadit embraces the power of Tailwind CSS, a utility-first CSS framework, to create stunning and responsive user interfaces. Tailwind CSS provides a comprehensive set of pre-designed components and flexible styling options, empowering you to build beautiful and consistent designs with ease.

- Redis Caching: Breadit leverages Redis for caching to optimize performance and reduce database load. Redis, an in-memory data store, enables lightning-fast data retrieval, making Breadit a snappy and responsive platform for users.




## Getting Started

To get Breadit up and running on your local machine, follow these steps:

 __Prerequisites:__ Make sure you have Node.js and npm (Node Package Manager) installed on your system. 

__Clone the Repository:__ Clone the Breadit repository to your local machine using the following command:

```bash
  git clone https://github.com/prathibha97/breadit.git
```
__Install Dependencies:__ Navigate to the project directory and install the necessary dependencies by running:
    
```bash
    cd breadit
    npm install
```

__Database Setup:__ Set up your MySQL database and update the database configuration in the .env file with your credentials.

__Migrate the Database:__ Run the Prisma migration command to create the database schema:

```bash
    npx prisma migrate dev --name init
```

__Start the Application:__ Launch Breadit by running the following command:

```bash
    npm run dev
```

__Open in Browser:__ Visit http://localhost:3000 in your web browser to access Breadit and explore its features.


## Contributing

- We welcome contributions to enhance Breadit and make it even better! To contribute, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.

- Make your changes, ensuring they align with the project's coding style and best practices.

- Write tests to cover any new functionality or changes you introduce.

- Submit a pull request, describing your changes in detail and explaining their benefits.

- Participate in the code review process and address any feedback given.




## License

Breadit is released under the [MIT](https://choosealicense.com/licenses/mit/) License, granting you the freedom to use, modify, and distribute the software.



## Acknowledgements

We would like to express our gratitude to the developers of Next.js, Prisma, MySQL, Tailwind CSS, and Redis for creating the amazing technologies that power Breadit.

