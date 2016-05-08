import React from 'react';

const Category = React.createClass({
  render() {
    return (
        <tr>
            <td colSpan="4" className="text-center"><span>{this.props.cat}</span></td>
        </tr>
    );
  }
});

export default Category;
