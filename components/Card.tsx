import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ICard {
    title?: string;
    children?: ReactNode;
}

export default function Card({ title, children }: ICard) {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            {children && <View style={styles.content}>{children}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    content: {
        paddingTop: 4,
    },
});
