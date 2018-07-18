import React, { Component } from 'react';

export default class BookList extends Component {
    renderList(){
        return this.props.books.map((book ) => {    //for each book in the array, create an li that contains the books title
            return (
                <li key= {book.title} className = "list-group-item">{book.title}</li>
            );
        });
    }


    render() {
        return(
            <ul className = "list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}