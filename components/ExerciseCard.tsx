import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { StackNavigatorParamsList } from '../App';
import colors from '../styles/colors';
import { IExercise } from '../interfaces/exercise.interface';
import SetsListItem from './SetsListItem';
import borderStyle from '../styles/border';

interface IExerciseCardProps {
    exercise: IExercise;
}

const Delete = () => {
    return (
        <View style={styles.delete}>
            <Ionicons name="ios-trash-outline" size={32} color="white" />
            <Text style={styles.deleteText}>Delete</Text>
        </View>
    );
};

const ExerciseCard = ({ exercise }: IExerciseCardProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorParamsList>>();

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
                        />
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
        overflow: 'hidden',
        ...borderStyle,
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
