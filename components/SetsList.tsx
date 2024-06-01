import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SetsListItem from './SetsListItem';
import { ISetsListItem } from '../interfaces/sets.interface';

interface IProps {
    list: ISetsListItem[];
}

const SetsList = ({ list }: IProps) => {
    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <SetsListItem reps={item.reps} weight={item.weight} trophy={item.trophy} />}
        ></FlatList>
    );
};

export default SetsList;

const styles = StyleSheet.create({});
