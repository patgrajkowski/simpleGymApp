import { Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { IExercise } from './ExerciseCard';
import colors from '../config/colors';

export interface IExerciseDetailsViewParams {
    route?: {
        params: {
            exercise?: IExercise;
        };
    };
}

const ExerciseDetailsView = ({ route }: IExerciseDetailsViewParams) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Weight</Text>
            <View style={styles.inputContainer}>
                <TouchableWithoutFeedback>
                    <Text style={styles.button}>-</Text>
                </TouchableWithoutFeedback>
                <TextInput selectionColor={colors.lightBlue} style={styles.input} keyboardType="number-pad"></TextInput>
                <TouchableWithoutFeedback>
                    <Text style={styles.button}>+</Text>
                </TouchableWithoutFeedback>
            </View>
            <Text style={styles.text}>Reps</Text>
            <View style={styles.inputContainer}>
                <TouchableWithoutFeedback>
                    <Text style={styles.button}>-</Text>
                </TouchableWithoutFeedback>
                <TextInput selectionColor={colors.lightBlue} style={styles.input} keyboardType="number-pad"></TextInput>
                <TouchableWithoutFeedback>
                    <Text style={styles.button}>+</Text>
                </TouchableWithoutFeedback>
            </View>
            <Button title="Add" color={colors.lightBlue}></Button>
        </View>
    );
};

export default ExerciseDetailsView;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.grey,
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.grey,
        overflow: 'hidden',
        marginTop: 10,
    },
    input: {
        fontSize: 24,
        width: 100,
        padding: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
    },
});
