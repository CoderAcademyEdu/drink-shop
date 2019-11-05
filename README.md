# The Drink Shop Challenge

Implement all the functions provided according to the type definitions in this documentation.

You must submit the implementation of your functions via Ed to check whether they are correct.

As an extension activity for this task you should create this application as an API for managing customers and orders that could be connected to a website or mobile application front-end.

## View the Documentation Online

See https://coderacademyedu.github.io/drink-shop/docs/

## How to Run the Documentation for this Challenge Locally

1. Clone the repository:

```shell
git clone https://github.com/nclarx/test-esdoc
```

2. Run `npm start` to install dependencies and run the server, then navigate to http://localhost:8000 in your web browser.

ALTERNATIVELY

2. Run `npm install` and then `npx http-server ./doc -p 8000`.

## How is the documentation generated?

The documentation website is generated from the JavaScript file in the `src` folder. The syntax used is [JSDoc](https://devdocs.io/jsdoc/) and [ESDoc](https://esdoc.org/) is the tool used to compile the JSDoc annotations into a webpage.

To compile the documentation yourself:

1. Run `npm install`

2. Run `px esdoc -c ./esdoc-config.json`

Check out `esdoc-config.json` for the configuration of ESDoc.