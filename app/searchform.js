import React from 'react';

const SearchForm = React.createClass({
   handleChangeEvent(){
       var name = this.refs.textChange.value;
       var checkedValue = this.refs.checkboxChange.checked;
       this.props.onUpdate(name,checkedValue);
   } ,
  render() {
    return (
        <form className="form-horizontal">
            <div className="form-group">
                <label className="col-sm-2 control-label sr-only">Search Product</label>
                <div className="col-sm-10">
                    <input ref="textChange"  onChange={this.handleChangeEvent} type="text" value={this.props.searchText} className="form-control" placeholder="Search..."/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                        <label>
                            <input ref="checkboxChange" onChange={this.handleChangeEvent} type="checkbox" checked={this.props.stockCheckBox}/> Only show products in stock
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
  }
});

export default SearchForm;
