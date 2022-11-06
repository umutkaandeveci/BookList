import { React } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Spinner } from './spinner';
const MyButton = ({spinner, title, color, onPress}) => {
    const content = spinner ? (
        <Spinner/>
    ) : (
            <Button color= {color}
            title= {title}
            onPress={onPress}/>  
    )
    return(
        <View style={styles.buttonWrapper}>
            {content}
        </View>
    )
}
const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
    },
})
export { MyButton }