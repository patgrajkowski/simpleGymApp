import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ExerciseCard from './ExerciseCard';
import { IExercise } from '../interfaces/exercise.interface';

const exercises: IExercise[] = [
    {
        name: 'Bench press',
        sets: [
            { trophy: false, weight: 100, reps: 10 },
            { trophy: true, weight: 110, reps: 9 },
            { trophy: false, weight: 100, reps: 8 },
        ],
    },
    {
        name: 'Squat',
        sets: [
            { trophy: false, weight: 80, reps: 10 },
            { trophy: false, weight: 90, reps: 9 },
            { trophy: true, weight: 100, reps: 8 },
        ],
    },
    {
        name: 'Curl',
        sets: [
            { trophy: true, weight: 40, reps: 10 },
            { trophy: true, weight: 45, reps: 9 },
            { trophy: true, weight: 50, reps: 8 },
        ],
    },
    {
        name: 'Bench press',
        sets: [
            { trophy: false, weight: 100, reps: 10 },
            { trophy: true, weight: 110, reps: 9 },
            { trophy: false, weight: 100, reps: 8 },
        ],
    },
    {
        name: 'Squat',
        sets: [
            { trophy: false, weight: 80, reps: 10 },
            { trophy: false, weight: 90, reps: 9 },
            { trophy: true, weight: 100, reps: 8 },
        ],
    },
    {
        name: 'Curl',
        sets: [
            { trophy: true, weight: 40, reps: 10 },
            { trophy: true, weight: 45, reps: 9 },
            { trophy: true, weight: 50, reps: 8 },
        ],
    },
];

const ExercisesView = () => {
    return (
        <FlatList
            data={exercises}
            style={styles.container}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <ExerciseCard exercise={item} />
                </View>
            )}
        ></FlatList>
    );
};

export default ExercisesView;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 5,
    },
});
