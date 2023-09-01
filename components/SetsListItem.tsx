import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import { ISetsListItem } from './SetsList';

const SetsListItem = ({ trophy = false, weight, reps }: ISetsListItem) => {
    return (
        <View style={styles.container}>
            <Ionicons
                style={styles.icon}
                name="ios-trophy-outline"
                size={24}
                color={trophy ? colors.lightBlue : 'transparent'}
            />
            <Text style={styles.text}>{weight} kgs</Text>
            <Text style={styles.text}>{reps} reps</Text>
        </View>
    );
};

export default SetsListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center',
    },
    icon: {
        width: '10%',
        textAlign: 'right',
    },
    text: {
        width: '30%',
        textAlign: 'right',
        color: colors.grey,
        fontSize: 16,
        height: 24,
    },
});
