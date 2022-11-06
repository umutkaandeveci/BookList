import React, {Component} from "react";
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';
import { connect } from "react-redux";
import BookItem from "./bookItem";
import { Card } from "./common";
class BookList extends Component {
                                    
    renderItem({item}) {
        
        return(
            <BookItem book={item}/>
        )
    }

    render() {
        const { data } = this.props;
        const {container} = styles;
        return(
              
         <SafeAreaView style={container}>
               <FlatList 
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.isbn}
                />
    
         </SafeAreaView>
       
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
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
    container: {
           marginBottom: 160,
           
           
    },
 
});

export default connect(mapStateToProps)(BookList);