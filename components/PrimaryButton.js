import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({children, onPress}) => {

    return (
       
        <View style={styles.buttonOutercontainer}>
            <Pressable 
                onPress={onPress}
                style={({pressed}) => pressed ? [styles.buttonInnercontainer, styles.pressed] : styles.buttonInnercontainer} 
                android_ripple={{color:Colors.primary700, opacity:0.75}}
                >  
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
       
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOutercontainer:{
        borderRadius: 28,
        overflow: 'hidden',
        margin: 4
    },
    buttonInnercontainer:{
        backgroundColor: Colors.primary800 ,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        
    },
    buttonText:{
        color: 'white',
        textAlign: "center"
    },
    pressed: {
        color:Colors.primary700, 
        opacity:0.75
    }
})