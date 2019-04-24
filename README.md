# React Pure Pagination

[![npm version](https://badge.fury.io/js/react-pure-pagination.svg)](https://badge.fury.io/js/react-pure-pagination)

A simple and reusable Pagination component for React
![Sample Pagination](https://raw.githubusercontent.com/sheetalkumar105/react-pure-pagination/master/screen.png)

## Installation

The package can be installed via NPM:

```
npm install react-pure-pagination --save
```

You’ll need to install React and PropTypes separately since those dependencies aren’t included in the package.
Below is a simple example of how to use the Pagination in a React view. You will also need to require the CSS file from this package (or provide your own).
The example below shows how to include the CSS from this package if your build system supports requiring CSS files (Webpack is one that does).

```js
import React from "react";
import Paginate from "react-pure-pagination";

import "react-pure-pagination/dist/Paginate.css";

// In scss you can use
// @import 'react-pure-pagination/dist/Paginate.scss';

const paginationStyle = {
  currentPage: {
    background: '#4925bd'
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 2
    };
    this.handlePaginate = this.handlePaginate.bind(this);
  }

  handlePaginate(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    return (
      <Paginate total={50} perPage={10} current={this.state.currentPage} onChange={this.handlePaginate} styles={paginationStyle} />
    );
  }
}
```

## Configuration

The most basic use of the Paginate can be described with:

```js
<Paginate 
  total={50} 
  perPage={10} 
  current={this.state.currentPage} 
  onChange={this.handlePaginate} 
/>
```

You can set `showFirstButton` and `showLastButton` props as false to hide first and last option in pagination. 

```js
<Paginate 
  total={50} 
  perPage={10} 
  current={this.state.currentPage} 
  onChange={this.handlePaginate} 
  showFirstButton={false}
  showLastButton={false}
/>
```

Developed under Impulsive Web Pvt Ltd.
[Impulsive Web Pvt Ltd](https://impulsiveweb.com/)
