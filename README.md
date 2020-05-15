# Kabibalo - Server-side

This is the repository for the server-side **Kabibalo**. You may need interest by the [client-side repository]().

The purpose of the **Kabibalo** server is to manage entries and categories for both end-users and administrators.

> Kabibilo aims to provide a service to read articles from various topics. It can seen as a very narrow subset of Wikipedia with only *"general knowledge"*-oriented articles. Articles can be classified into multiple categories.  
> Two user aims to use **Kabibalo** : general users and administrators. An administrator has the rights to edit both articles and resources. The authentication process only apply for the administrators.



## Technologies used

- **Node.js:** Javascript runtime used for creating server-side web applications (extends the usual Javascript API)
- **Nest.js:** Node.js framework used to write modular, flexible, scalable server-side applications with Typescript
- **Express:** web framework for Node.js
- **Mongo DB:** NoSQL (document-oriented) database
- **Docker:** used to deploy the app in containers (lightweight and standalone  execution environments)
- **NGINX:**
- **Swagger:** used to document the Restful API

## Use cases
- Unrestricted
    - [ ] Get the paginate lists of all **published entries** order by *modification date*, *name* or *views*;
    - [ ] Get the list of **categories**
    - [ ] Get entries filter by *category*
    - [ ] Get an **published entry**
- Restricted
    - [ ] Create, modify and delete an **entry**
    - [ ] Create, modify and delete a **category**
    - [ ] Get the list of draft **entry**
    - [ ] Publish a draft entry

## Documentation
- [API documentation]()
- [Code documentation]()

## Installation

versions

```bash
$ npm install
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment (Docker)


## Author

[Romain Guillot](maitto:romain.guillot.contact@gmail.com)

## License

[MIT licensed](LICENSE).



<!-- eof -->
