import React, { Component } from "react";
import { StyleSheet, Text,TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Card } from './common';
import * as actions from '../actions';
class BookItem extends Component {

    onPressed() {
        
        const { book, selected } = this.props;
       selected ? this.props.deselectBook(): this.props.selectBook(book)
    }

    render() {
        const {titleStyle, authorStyle, descriptionStyles} = styles;
        const { book, selected } = this.props;
        const descriptionField = selected ? (
            <Text style={descriptionStyles}> {book.description} </Text>
        ) : null;
        return(
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
            <Card>
                <Text style={titleStyle}>{book.title}</Text>
                <Text style={authorStyle}> {book.author} </Text>
            </Card>
            {descriptionField}
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        color: 'black'
    },
    authorStyle: {
        fontSize: 12,
        color: 'gray'
    },
    descriptionStyles: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,
        color: 'gray'
    }
});

const mapStateToProps = (state, ownProps) => {
    
    const selected = state.selectedBook && state.selectedBook.isbn === ownProps.book.isbn;
    return {
        selected
    }
}
export default connect(mapStateToProps, actions) (BookItem);