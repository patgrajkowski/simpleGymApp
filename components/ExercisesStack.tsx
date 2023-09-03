import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationParamList } from '../App';
import ExerciseDetailsView from './ExerciseDetailsView';
import ExercisesView from './ExercisesView';

const Stack = createStackNavigator<StackNavigationParamList>();

const ExercisesStack = () => {
    return (
        <Stack.Navigator initialRouteName="Exercises">
            <Stack.Screen name="Exercises" component={ExercisesView} />
            <Stack.Screen
                name="ExerciseDetails"
                component={ExerciseDetailsView}
                options={({ route }) => ({ title: route?.params?.exercise?.name })}
            />
        </Stack.Navigator>
    );
};

export default ExercisesStack;

const styles = StyleSheet.create({});
