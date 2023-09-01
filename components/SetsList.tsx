import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SetsListItem from './SetsListItem';

interface ISetsList {
    list: ISetsListItem[];
}

export interface ISetsListItem {
    trophy?: boolean;
    weight: number;
    reps: number;
}

const SetsList = ({ list }: ISetsList) => {
    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <SetsListItem reps={item.reps} weight={item.weight} trophy={item.trophy} />}
        ></FlatList>
    );
};

export default SetsList;

const styles = StyleSheet.create({});
