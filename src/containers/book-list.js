import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={()=>this.props.selectBook(book)}
          className="list-group-item"
          >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}
function mapStateToProps(state){
  //Whatever will show up as props to BookList.
  return {
    books: state.books
  };
}
//Whatever is returned from this fn ends up as props on book-list container.
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, result should be passed to all reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//Promote BookList to container from Component. Make selectBook available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
