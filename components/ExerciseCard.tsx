import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import SetsListItem from './SetsListItem';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationParamList } from '../App';

interface ISetsList {
    exercise: IExercise;
}

export interface IExercise {
    name: string;
    sets: ISetsListItem[];
}

export interface ISetsListItem {
    trophy?: boolean;
    weight: number;
    reps: number;
}

const Delete = () => {
    return (
        <View style={styles.delete}>
            <Ionicons name="ios-trash-outline" size={32} color="white" />
            <Text style={styles.deleteText}>Delete</Text>
        </View>
    );
};

const ExerciseCard = ({ exercise }: ISetsList) => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationParamList>>();

    return (
        <View style={styles.container}>
            <Swipeable renderRightActions={Delete}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate('ExerciseDetails', { exercise });
                    }}
                >
                    <View style={styles.content}>
                        <Text style={styles.title}>{exercise.name}</Text>
                        <FlatList
                            data={exercise.sets}
                            renderItem={({ item }) => (
                                <SetsListItem reps={item.reps} weight={item.weight} trophy={item.trophy} />
                            )}
                        ></FlatList>
                    </View>
                </TouchableWithoutFeedback>
            </Swipeable>
        </View>
    );
};

export default ExerciseCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 4,
        overflow: 'hidden',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    content: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: 'white',
        paddingTop: 4,
    },
    delete: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.red,
        width: 72,
    },
    deleteText: {
        color: 'white',
    },
});
