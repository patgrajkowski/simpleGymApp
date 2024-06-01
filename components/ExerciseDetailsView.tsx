import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { StackNavigatorParamsList } from '../App';
import colors from '../styles/colors';
import SetsListItem from './SetsListItem';
import { IExerciseSet } from '../interfaces/exercise.interface';

type TExerciseDetailsView = RouteProp<StackNavigatorParamsList, 'ExerciseDetails'>;

export interface IExerciseDetailsViewParams {
    route: TExerciseDetailsView;
}

const ExerciseDetailsView = ({ route }: IExerciseDetailsViewParams) => {
    const { exercise } = route.params;

    const [weight, setWeight] = React.useState('0');
    const [reps, setReps] = React.useState('0');
    const [sets, setSets] = React.useState(exercise.sets || []);

    const increment = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
        const number = Number(value);
        setter(String(number + 1));
    };

    const decrement = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
        const number = Number(value);
        if (number - 1 < 0) {
            setter('0');
            return;
        }
        setter(String(number - 1));
    };

    const addSet = () => {
        if (weight && reps) {
            const _weight = Number(weight);
            const _reps = Number(reps);
            const set: IExerciseSet = {
                trophy: false,
                reps: _reps,
                weight: _weight,
            };
            setSets((prevSets) => [...prevSets, set]);
            exercise.sets.push(set);
            setReps('');
            setWeight('');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Weight</Text>
            <View style={styles.inputContainer}>
                <TouchableWithoutFeedback onPress={() => decrement(weight, setWeight)}>
                    <Text style={styles.button}>-</Text>
                </TouchableWithoutFeedback>
                <TextInput
                    value={weight}
                    onChangeText={setWeight}
                    selectionColor={colors.lightBlue}
                    style={styles.input}
                    keyboardType="number-pad"
                ></TextInput>
                <TouchableWithoutFeedback onPress={() => increment(weight, setWeight)}>
                    <Text style={styles.button}>+</Text>
                </TouchableWithoutFeedback>
            </View>
            <Text style={styles.text}>Reps</Text>
            <View style={styles.inputContainer}>
                <TouchableWithoutFeedback onPress={() => decrement(reps, setReps)}>
                    <Text style={styles.button}>-</Text>
                </TouchableWithoutFeedback>
                <TextInput
                    value={reps}
                    selectionColor={colors.lightBlue}
                    style={styles.input}
                    keyboardType="number-pad"
                ></TextInput>
                <TouchableWithoutFeedback onPress={() => increment(reps, setReps)}>
                    <Text style={styles.button}>+</Text>
                </TouchableWithoutFeedback>
            </View>
            <Button title="Add" color={colors.lightBlue} onPress={addSet}></Button>
            <FlatList
                data={sets}
                renderItem={({ item }) => <SetsListItem reps={item.reps} weight={item.weight} trophy={item.trophy} />}
            />
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
