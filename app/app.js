import React from 'react';
import ReactDOM from 'react-dom';
import SearchProductBox from './searchproductbox';
ReactDOM.render(<SearchProductBox url="api/productlist.json"/>,document.querySelector('#content'));