import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {

    const [entredNumber, setEntredNumber] = useState('')

    const numberInputHandler = (entredText) => {
        setEntredNumber(entredText)
    }

    const confirmInputHandler = () => {

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength = {2} 
                keyboardType='number-pad'
                value={entredNumber}
                onChangeText={numberInputHandler}
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonCointainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonCointainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0 , height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonCointainer: {
        flex:1
    }
})