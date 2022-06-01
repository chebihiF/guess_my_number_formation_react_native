import { Text,View, StyleSheet, StatusBar } from "react-native";
import { useState } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
const GameScreen = ({userNumber}) => {

    const generateRandomBetween = (min, max, exclude) => {
        const rdmNumber = Math.floor(Math.random() * (max - min)) + min ;
        if(rdmNumber === exclude)
            return generateRandomBetween(min, max, exclude)
        else
            return rdmNumber
    }

    const initialGuess = generateRandomBetween(1,100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)


    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Title>Higher or lower ?</Title>
                {/* + / - */}
            </View>
            <View>{ /* LOG Rounds */}</View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    }
})