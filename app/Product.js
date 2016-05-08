import React from 'react';

const Product = React.createClass({
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.category}</td>
                <td>{this.props.stock.toString()}</td>
            </tr>
        );
    }
});

export default Product;
