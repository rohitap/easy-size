# Easysize Product Randomiser

## Introduction
This simple library randomises the available attributes for a given product. The product's attributes are randomised in an iFrame which contains a React app.

The React app is built in an HTML file which is supported by the prominent Material UI library.

This HTML file along with our plugin i.e the demo.js is being served using the 'http-server' library at the required port as mentioned.

### Steps to clone the repository

```
git clone https://github.com/rohitap/easy-size.git

```

## Installing and Running the React App

### Switch to the Library folder
```
cd easy-size

```

### Package Installation
In the project directory's terminal run below command to install all the required packages
```
npm install

```

### App start
In the project directory's terminal run the below command
```
npm run start
```
This will initialise the 'http-server' with the library ready to be server at the 3355 port

### Configuration Object

```
  let configuration = {
    attributes: ['red', 'blue', 'black'],
    attributeName: 'Color',
    placeholder: '.product-color',
    placeholder_text: 'Surprise me with the color',
    placeholder_class: 'cart-btn',
    image: window.location.origin + '/images/black.png',
    select_attribute: function(attr) {
      $('.color-choose input[data-image = ' + attr + ']').click()
    }
  }

```
## General Notes

- When publishing the library we can add the minified version of the React code
- We can also add an exhaustive validation of the configuration object as the Widget function gets called.
- Unit tests also can be added.
- The styling could be improved.