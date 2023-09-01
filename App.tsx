import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StatusBar as StatusBarRN, StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import CalendarView from './components/CalendarView';
import ExerciseView from './components/ExerciseView';
import SettingsView from './components/SettingsView';
import colors from './config/colors';

export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer
            theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,
                    primary: colors.lightBlue,
                    background: 'white',
                    text: 'black',
                },
            }}
        >
            <SafeAreaView style={styles.app}>
                <StatusBar style="auto" />
                <Tab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: colors.lightBlue,
                        tabBarInactiveTintColor: colors.grey,
                        headerShadowVisible: false,
                    }}
                >
                    <Tab.Screen
                        name="Calendar"
                        component={CalendarView}
                        options={{
                            tabBarIcon: ({ size, color }) => (
                                <Ionicons name={'ios-calendar-outline'} size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Exercise"
                        component={ExerciseView}
                        options={{
                            headerTitle: 'Today',
                            tabBarIcon: ({ size, color }) => (
                                <Ionicons name={'ios-barbell'} size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={SettingsView}
                        options={{
                            tabBarIcon: ({ size, color }) => (
                                <Ionicons name={'ios-settings-outline'} size={size} color={color} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBarRN.currentHeight : 0,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '500',
    },
});
