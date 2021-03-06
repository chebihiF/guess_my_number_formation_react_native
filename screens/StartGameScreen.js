import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

const StartGameScreen = ({onPickNumber}) => {

    const [entredNumber, setEntredNumber] = useState('')

    const numberInputHandler = (entredText) => {
        setEntredNumber(entredText)
    }

    const resetInpitHandler = () => {
        setEntredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(entredNumber)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [{text: 'OK', style: 'destructive', onPress: resetInpitHandler}]
            )
            return;
        }
        onPickNumber(chosenNumber)
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
                    <PrimaryButton onPress={resetInpitHandler}>Reset</PrimaryButton>
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
        backgroundColor: Colors.primary500,
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
        borderBottomColor: Colors.primary600,
        borderBottomWidth: 2,
        color: Colors.primary600,
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