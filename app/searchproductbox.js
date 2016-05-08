import React from 'react';
import SearchForm from './searchform';
import ProductList from './productlist';

const SearchProductBox = React.createClass({
    getInitialState() {
      return {
        products:[],
        stockCheckBox: true,
        searchText:''
      };
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                  products:data
                });

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    onUpdate(name,checkedValue){
        this.setState({
            stockCheckBox: checkedValue,
            searchText:name
        });
    },
  render() {

    return (
        <div className="row">
            <div className="col-md-6">
                <SearchForm onUpdate={this.onUpdate} stockCheckBox={this.state.stockCheckBox}  searchText={this.state.searchText}/>
            </div>
            <div className="col-md-6">
                <ProductList products={this.state.products} stockCheckBox={this.state.stockCheckBox}  searchText={this.state.searchText}/>
            </div>
        </div>
    );
  }
});

export default SearchProductBox;

