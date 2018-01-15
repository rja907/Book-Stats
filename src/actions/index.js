export function selectBook(book){
  //console.log('A book was selected! ', book.title);

  //selectBook is an action creator. It needs to return an action an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
