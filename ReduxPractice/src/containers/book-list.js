import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book ) => {    //for each book in the array, create an li that contains the books title
            return (
                <li 
                    key= {book.title} 
                    onClick = { ()=> this.props.selectBook(book)}
                    className = "list-group-item">
                    {book.title}
                </li>
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

//Anything returned from this function will end up as props on the BookList container
function mapStateToProps(state){
    //whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    //whenever slectBook is called, the result should be passed to ALL
    //of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//Promote BookList from a component to a container
//It needs to know about the new dispatch method, selectBook. Make it available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//if you're trying to use this on your own project, take a look at the documentation for connect function