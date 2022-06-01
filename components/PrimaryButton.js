import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({children, onPress}) => {
    
    const pressHandler = () => {
        console.log("Pressed!!")
    }
    
    return (
       
        <View style={styles.buttonOutercontainer}>
            <Pressable 
                onPress={onPress}
                style={({pressed}) => pressed ? [styles.buttonInnercontainer, styles.pressed] : styles.buttonInnercontainer} onPress={pressHandler} 
                android_ripple={{color:'#520635', opacity:0.75}}
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
        backgroundColor: '#72063c' ,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        
    },
    buttonText:{
        color: 'white',
        textAlign: "center"
    },
    pressed: {
        color:'#520635', 
        opacity:0.75
    }
})