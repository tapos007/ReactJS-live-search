(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = _react2.default.createClass({
    displayName: 'Product',
    render: function render() {
        return _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
                'td',
                null,
                this.props.name
            ),
            _react2.default.createElement(
                'td',
                null,
                this.props.price
            ),
            _react2.default.createElement(
                'td',
                null,
                this.props.category
            ),
            _react2.default.createElement(
                'td',
                null,
                this.props.stock.toString()
            )
        );
    }
});

exports.default = Product;

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _searchproductbox = require('./searchproductbox');

var _searchproductbox2 = _interopRequireDefault(_searchproductbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_searchproductbox2.default, { url: 'api/productlist.json' }), document.querySelector('#content'));

},{"./searchproductbox":6,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = _react2.default.createClass({
  displayName: "Category",
  render: function render() {
    return _react2.default.createElement(
      "tr",
      null,
      _react2.default.createElement(
        "td",
        { colSpan: "4", className: "text-center" },
        _react2.default.createElement(
          "span",
          null,
          this.props.cat
        )
      )
    );
  }
});

exports.default = Category;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _category = require('./category');

var _category2 = _interopRequireDefault(_category);

var _Product = require('./Product');

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductList = _react2.default.createClass({
    displayName: 'ProductList',
    render: function render() {
        var listProduct = [];
        var selectedCategory = null;
        {
            this.props.products.forEach(function (aProduct) {
                if (aProduct.name.indexOf(this.props.searchText) === -1 || this.props.stockCheckBox && !aProduct.stocked) {
                    return;
                }
                if (aProduct.category !== selectedCategory) {
                    listProduct.push(_react2.default.createElement(_category2.default, { cat: aProduct.category, key: aProduct.category }));
                }
                listProduct.push(_react2.default.createElement(_Product2.default, { key: aProduct.name, name: aProduct.name, category: aProduct.category, price: aProduct.price, stock: aProduct.stocked }));
                selectedCategory = aProduct.category;
            }.bind(this));
        }
        return _react2.default.createElement(
            'table',
            { className: 'table table-bordered' },
            _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        'Price'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        'Category'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        'Stocked'
                    )
                )
            ),
            _react2.default.createElement(
                'tbody',
                null,
                listProduct
            )
        );
    }
});

exports.default = ProductList;

},{"./Product":1,"./category":3,"react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchForm = _react2.default.createClass({
    displayName: "SearchForm",
    handleChangeEvent: function handleChangeEvent() {
        var name = this.refs.textChange.value;
        var checkedValue = this.refs.checkboxChange.checked;
        this.props.onUpdate(name, checkedValue);
    },
    render: function render() {
        return _react2.default.createElement(
            "form",
            { className: "form-horizontal" },
            _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                    "label",
                    { className: "col-sm-2 control-label sr-only" },
                    "Search Product"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-sm-10" },
                    _react2.default.createElement("input", { ref: "textChange", onChange: this.handleChangeEvent, type: "text", value: this.props.searchText, className: "form-control", placeholder: "Search..." })
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                    "div",
                    { className: "col-sm-offset-2 col-sm-10" },
                    _react2.default.createElement(
                        "div",
                        { className: "checkbox" },
                        _react2.default.createElement(
                            "label",
                            null,
                            _react2.default.createElement("input", { ref: "checkboxChange", onChange: this.handleChangeEvent, type: "checkbox", checked: this.props.stockCheckBox }),
                            " Only show products in stock"
                        )
                    )
                )
            )
        );
    }
});

exports.default = SearchForm;

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _searchform = require('./searchform');

var _searchform2 = _interopRequireDefault(_searchform);

var _productlist = require('./productlist');

var _productlist2 = _interopRequireDefault(_productlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchProductBox = _react2.default.createClass({
    displayName: 'SearchProductBox',
    getInitialState: function getInitialState() {
        return {
            products: [],
            stockCheckBox: true,
            searchText: 'ball'
        };
    },


    componentDidMount: function componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({
                    products: data
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    onUpdate: function onUpdate(name, checkedValue) {
        this.setState({
            stockCheckBox: checkedValue,
            searchText: name
        });
    },
    render: function render() {

        return _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                _react2.default.createElement(_searchform2.default, { onUpdate: this.onUpdate, stockCheckBox: this.state.stockCheckBox, searchText: this.state.searchText })
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                _react2.default.createElement(_productlist2.default, { products: this.state.products, stockCheckBox: this.state.stockCheckBox, searchText: this.state.searchText })
            )
        );
    }
});

exports.default = SearchProductBox;

},{"./productlist":4,"./searchform":5,"react":"react"}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvUHJvZHVjdC5qcyIsImFwcC9hcHAuanMiLCJhcHAvY2F0ZWdvcnkuanMiLCJhcHAvcHJvZHVjdGxpc3QuanMiLCJhcHAvc2VhcmNoZm9ybS5qcyIsImFwcC9zZWFyY2hwcm9kdWN0Ym94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7OztBQUVBLElBQU0sVUFBVSxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFDOUIsVUFEOEIsb0JBQ3JCO0FBQ0wsZUFDSTtBQUFBO1lBQUE7WUFDSTtBQUFBO2dCQUFBO2dCQUFLLEtBQUssS0FBTCxDQUFXO0FBQWhCLGFBREo7WUFFSTtBQUFBO2dCQUFBO2dCQUFLLEtBQUssS0FBTCxDQUFXO0FBQWhCLGFBRko7WUFHSTtBQUFBO2dCQUFBO2dCQUFLLEtBQUssS0FBTCxDQUFXO0FBQWhCLGFBSEo7WUFJSTtBQUFBO2dCQUFBO2dCQUFLLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBakI7QUFBTDtBQUpKLFNBREo7QUFRSDtBQVY2QixDQUFsQixDQUFoQjs7a0JBYWUsTzs7Ozs7QUNmZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLG1CQUFTLE1BQVQsQ0FBZ0IsNERBQWtCLEtBQUksc0JBQXRCLEdBQWhCLEVBQStELFNBQVMsYUFBVCxDQUF1QixVQUF2QixDQUEvRDs7Ozs7Ozs7O0FDSEE7Ozs7OztBQUVBLElBQU0sV0FBVyxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFDakMsUUFEaUMsb0JBQ3hCO0FBQ1AsV0FDSTtBQUFBO01BQUE7TUFDSTtBQUFBO1FBQUEsRUFBSSxTQUFRLEdBQVosRUFBZ0IsV0FBVSxhQUExQjtRQUF3QztBQUFBO1VBQUE7VUFBTyxLQUFLLEtBQUwsQ0FBVztBQUFsQjtBQUF4QztBQURKLEtBREo7QUFLRDtBQVBnQyxDQUFsQixDQUFqQjs7a0JBVWUsUTs7Ozs7Ozs7O0FDWmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGNBQWMsZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBRXBDLFVBRm9DLG9CQUUzQjtBQUNMLFlBQUksY0FBYyxFQUFsQjtBQUNBLFlBQUksbUJBQW1CLElBQXZCO0FBQ0E7QUFDSSxpQkFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixPQUFwQixDQUE0QixVQUFVLFFBQVYsRUFBb0I7QUFDNUMsb0JBQUcsU0FBUyxJQUFULENBQWMsT0FBZCxDQUFzQixLQUFLLEtBQUwsQ0FBVyxVQUFqQyxNQUErQyxDQUFDLENBQWhELElBQXNELEtBQUssS0FBTCxDQUFXLGFBQVgsSUFBNEIsQ0FBQyxTQUFTLE9BQS9GLEVBQXdHO0FBQ3RHO0FBQ0Y7QUFDRCxvQkFBRyxTQUFTLFFBQVQsS0FBc0IsZ0JBQXpCLEVBQTBDO0FBQ3RDLGdDQUFZLElBQVosQ0FBaUIsb0RBQVUsS0FBSyxTQUFTLFFBQXhCLEVBQWtDLEtBQUssU0FBUyxRQUFoRCxHQUFqQjtBQUNIO0FBQ0EsNEJBQVksSUFBWixDQUFpQixtREFBUyxLQUFLLFNBQVMsSUFBdkIsRUFBNkIsTUFBTSxTQUFTLElBQTVDLEVBQWtELFVBQVUsU0FBUyxRQUFyRSxFQUErRSxPQUFPLFNBQVMsS0FBL0YsRUFBc0csT0FBTyxTQUFTLE9BQXRILEdBQWpCO0FBQ0EsbUNBQW1CLFNBQVMsUUFBNUI7QUFDSCxhQVQyQixDQVMxQixJQVQwQixDQVNyQixJQVRxQixDQUE1QjtBQVVIO0FBQ0gsZUFDSTtBQUFBO1lBQUEsRUFBTyxXQUFVLHNCQUFqQjtZQUNJO0FBQUE7Z0JBQUE7Z0JBQ0E7QUFBQTtvQkFBQTtvQkFDSTtBQUFBO3dCQUFBO3dCQUFBO0FBQUEscUJBREo7b0JBRUk7QUFBQTt3QkFBQTt3QkFBQTtBQUFBLHFCQUZKO29CQUdJO0FBQUE7d0JBQUE7d0JBQUE7QUFBQSxxQkFISjtvQkFJSTtBQUFBO3dCQUFBO3dCQUFBO0FBQUE7QUFKSjtBQURBLGFBREo7WUFTSTtBQUFBO2dCQUFBO2dCQUNNO0FBRE47QUFUSixTQURKO0FBZUQ7QUFoQ21DLENBQWxCLENBQXBCOztrQkFtQ2UsVzs7Ozs7Ozs7O0FDdkNmOzs7Ozs7QUFFQSxJQUFNLGFBQWEsZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBQ2xDLHFCQURrQywrQkFDZjtBQUNmLFlBQUksT0FBTyxLQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBQWhDO0FBQ0EsWUFBSSxlQUFlLEtBQUssSUFBTCxDQUFVLGNBQVYsQ0FBeUIsT0FBNUM7QUFDQSxhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLElBQXBCLEVBQXlCLFlBQXpCO0FBQ0gsS0FMaUM7QUFNbkMsVUFObUMsb0JBTTFCO0FBQ1AsZUFDSTtBQUFBO1lBQUEsRUFBTSxXQUFVLGlCQUFoQjtZQUNJO0FBQUE7Z0JBQUEsRUFBSyxXQUFVLFlBQWY7Z0JBQ0k7QUFBQTtvQkFBQSxFQUFPLFdBQVUsZ0NBQWpCO29CQUFBO0FBQUEsaUJBREo7Z0JBRUk7QUFBQTtvQkFBQSxFQUFLLFdBQVUsV0FBZjtvQkFDSSx5Q0FBTyxLQUFJLFlBQVgsRUFBeUIsVUFBVSxLQUFLLGlCQUF4QyxFQUEyRCxNQUFLLE1BQWhFLEVBQXVFLE9BQU8sS0FBSyxLQUFMLENBQVcsVUFBekYsRUFBcUcsV0FBVSxjQUEvRyxFQUE4SCxhQUFZLFdBQTFJO0FBREo7QUFGSixhQURKO1lBT0k7QUFBQTtnQkFBQSxFQUFLLFdBQVUsWUFBZjtnQkFDSTtBQUFBO29CQUFBLEVBQUssV0FBVSwyQkFBZjtvQkFDSTtBQUFBO3dCQUFBLEVBQUssV0FBVSxVQUFmO3dCQUNJO0FBQUE7NEJBQUE7NEJBQ0kseUNBQU8sS0FBSSxnQkFBWCxFQUE0QixVQUFVLEtBQUssaUJBQTNDLEVBQThELE1BQUssVUFBbkUsRUFBOEUsU0FBUyxLQUFLLEtBQUwsQ0FBVyxhQUFsRyxHQURKOzRCQUFBO0FBQUE7QUFESjtBQURKO0FBREo7QUFQSixTQURKO0FBbUJEO0FBMUJrQyxDQUFsQixDQUFuQjs7a0JBNkJlLFU7Ozs7Ozs7OztBQy9CZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sbUJBQW1CLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUN2QyxtQkFEdUMsNkJBQ3JCO0FBQ2hCLGVBQU87QUFDTCxzQkFBUyxFQURKO0FBRUwsMkJBQWUsSUFGVjtBQUdMLHdCQUFXO0FBSE4sU0FBUDtBQUtELEtBUHNDOzs7QUFTdkMsdUJBQW1CLDZCQUFXO0FBQzFCLFVBQUUsSUFBRixDQUFPO0FBQ0gsaUJBQUssS0FBSyxLQUFMLENBQVcsR0FEYjtBQUVILHNCQUFVLE1BRlA7QUFHSCxtQkFBTyxLQUhKO0FBSUgscUJBQVMsVUFBUyxJQUFULEVBQWU7QUFDcEIscUJBQUssUUFBTCxDQUFjO0FBQ1osOEJBQVM7QUFERyxpQkFBZDtBQUlILGFBTFEsQ0FLUCxJQUxPLENBS0YsSUFMRSxDQUpOO0FBVUgsbUJBQU8sVUFBUyxHQUFULEVBQWMsTUFBZCxFQUFzQixHQUF0QixFQUEyQjtBQUM5Qix3QkFBUSxLQUFSLENBQWMsS0FBSyxLQUFMLENBQVcsR0FBekIsRUFBOEIsTUFBOUIsRUFBc0MsSUFBSSxRQUFKLEVBQXRDO0FBQ0gsYUFGTSxDQUVMLElBRkssQ0FFQSxJQUZBO0FBVkosU0FBUDtBQWNILEtBeEJzQztBQXlCdkMsWUF6QnVDLG9CQXlCOUIsSUF6QjhCLEVBeUJ6QixZQXpCeUIsRUF5Qlo7QUFDdkIsYUFBSyxRQUFMLENBQWM7QUFDViwyQkFBZSxZQURMO0FBRVYsd0JBQVc7QUFGRCxTQUFkO0FBSUgsS0E5QnNDO0FBK0J6QyxVQS9CeUMsb0JBK0JoQzs7QUFFUCxlQUNJO0FBQUE7WUFBQSxFQUFLLFdBQVUsS0FBZjtZQUNJO0FBQUE7Z0JBQUEsRUFBSyxXQUFVLFVBQWY7Z0JBQ0ksc0RBQVksVUFBVSxLQUFLLFFBQTNCLEVBQXFDLGVBQWUsS0FBSyxLQUFMLENBQVcsYUFBL0QsRUFBK0UsWUFBWSxLQUFLLEtBQUwsQ0FBVyxVQUF0RztBQURKLGFBREo7WUFJSTtBQUFBO2dCQUFBLEVBQUssV0FBVSxVQUFmO2dCQUNJLHVEQUFhLFVBQVUsS0FBSyxLQUFMLENBQVcsUUFBbEMsRUFBNEMsZUFBZSxLQUFLLEtBQUwsQ0FBVyxhQUF0RSxFQUFzRixZQUFZLEtBQUssS0FBTCxDQUFXLFVBQTdHO0FBREo7QUFKSixTQURKO0FBVUQ7QUEzQ3dDLENBQWxCLENBQXpCOztrQkE4Q2UsZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUHJvZHVjdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuY2F0ZWdvcnl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuc3RvY2sudG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTZWFyY2hQcm9kdWN0Qm94IGZyb20gJy4vc2VhcmNocHJvZHVjdGJveCc7XG5SZWFjdERPTS5yZW5kZXIoPFNlYXJjaFByb2R1Y3RCb3ggdXJsPVwiYXBpL3Byb2R1Y3RsaXN0Lmpzb25cIi8+LGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENhdGVnb3J5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI0XCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj57dGhpcy5wcm9wcy5jYXR9PC9zcGFuPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5JztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XG5cbmNvbnN0IFByb2R1Y3RMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlcigpIHtcbiAgICAgIHZhciBsaXN0UHJvZHVjdCA9IFtdO1xuICAgICAgdmFyIHNlbGVjdGVkQ2F0ZWdvcnkgPSBudWxsO1xuICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMucHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbiAoYVByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgaWYoYVByb2R1Y3QubmFtZS5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoVGV4dCk9PT0tMSB8fCAodGhpcy5wcm9wcy5zdG9ja0NoZWNrQm94ICYmICFhUHJvZHVjdC5zdG9ja2VkKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBpZihhUHJvZHVjdC5jYXRlZ29yeSAhPT0gc2VsZWN0ZWRDYXRlZ29yeSl7XG4gICAgICAgICAgICAgICAgIGxpc3RQcm9kdWN0LnB1c2goPENhdGVnb3J5IGNhdD17YVByb2R1Y3QuY2F0ZWdvcnl9IGtleT17YVByb2R1Y3QuY2F0ZWdvcnl9IC8+KTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpc3RQcm9kdWN0LnB1c2goPFByb2R1Y3Qga2V5PXthUHJvZHVjdC5uYW1lfSBuYW1lPXthUHJvZHVjdC5uYW1lfSBjYXRlZ29yeT17YVByb2R1Y3QuY2F0ZWdvcnl9IHByaWNlPXthUHJvZHVjdC5wcmljZX0gc3RvY2s9e2FQcm9kdWN0LnN0b2NrZWR9Lz4pO1xuICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5ID0gYVByb2R1Y3QuY2F0ZWdvcnk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+Q2F0ZWdvcnk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5TdG9ja2VkPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICB7bGlzdFByb2R1Y3R9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlYXJjaEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICBoYW5kbGVDaGFuZ2VFdmVudCgpe1xuICAgICAgIHZhciBuYW1lID0gdGhpcy5yZWZzLnRleHRDaGFuZ2UudmFsdWU7XG4gICAgICAgdmFyIGNoZWNrZWRWYWx1ZSA9IHRoaXMucmVmcy5jaGVja2JveENoYW5nZS5jaGVja2VkO1xuICAgICAgIHRoaXMucHJvcHMub25VcGRhdGUobmFtZSxjaGVja2VkVmFsdWUpO1xuICAgfSAsXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsIHNyLW9ubHlcIj5TZWFyY2ggUHJvZHVjdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj1cInRleHRDaGFuZ2VcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRXZlbnR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNoVGV4dH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj1cImNoZWNrYm94Q2hhbmdlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRXZlbnR9IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuc3RvY2tDaGVja0JveH0vPiBPbmx5IHNob3cgcHJvZHVjdHMgaW4gc3RvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaGZvcm0nO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vcHJvZHVjdGxpc3QnO1xuXG5jb25zdCBTZWFyY2hQcm9kdWN0Qm94ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2R1Y3RzOltdLFxuICAgICAgICBzdG9ja0NoZWNrQm94OiB0cnVlLFxuICAgICAgICBzZWFyY2hUZXh0OidiYWxsJ1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLnByb3BzLnVybCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0czpkYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih0aGlzLnByb3BzLnVybCwgc3RhdHVzLCBlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvblVwZGF0ZShuYW1lLGNoZWNrZWRWYWx1ZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RvY2tDaGVja0JveDogY2hlY2tlZFZhbHVlLFxuICAgICAgICAgICAgc2VhcmNoVGV4dDpuYW1lXG4gICAgICAgIH0pO1xuICAgIH0sXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gb25VcGRhdGU9e3RoaXMub25VcGRhdGV9IHN0b2NrQ2hlY2tCb3g9e3RoaXMuc3RhdGUuc3RvY2tDaGVja0JveH0gIHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXt0aGlzLnN0YXRlLnByb2R1Y3RzfSBzdG9ja0NoZWNrQm94PXt0aGlzLnN0YXRlLnN0b2NrQ2hlY2tCb3h9ICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUHJvZHVjdEJveDtcblxuIl19
