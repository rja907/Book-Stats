import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book){
      return <div className="ini">Select a book to get started!</div>
    }
    return (
      <div className="inf"><h3>Information</h3>Title: {this.props.book.title} <br />{this.props.book.pages} pages</div>
    );
  };
}
function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}
export default connect(mapStateToProps)(BookDetail);
