import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';

interface IWrapper {
    children: ReactNode;
}

const Wrapper = ({ children }: IWrapper) => {
    return <View style={styles.wrapper}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
    },
});
