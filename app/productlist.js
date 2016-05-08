import React from 'react';
import Category from './category';
import Product from './Product';

const ProductList = React.createClass({

  render() {
      var listProduct = [];
      var selectedCategory = null;
      {
          this.props.products.forEach(function (aProduct) {
              if(aProduct.name.indexOf(this.props.searchText)===-1 || (this.props.stockCheckBox && !aProduct.stocked)){
                return;
             }
             if(aProduct.category !== selectedCategory){
                 listProduct.push(<Category cat={aProduct.category} key={aProduct.category} />);
             }
              listProduct.push(<Product key={aProduct.name} name={aProduct.name} category={aProduct.category} price={aProduct.price} stock={aProduct.stocked}/>);
              selectedCategory = aProduct.category;
          }.bind(this));
      }
    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Stocked</th>
            </tr>
            </thead>
            <tbody>
                 {listProduct}
            </tbody>
        </table>
    );
  }
});

export default ProductList;
