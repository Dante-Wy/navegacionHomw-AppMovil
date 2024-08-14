import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const screen1 = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.tituloGen}>
            ¡Bienvenido!
            </Text>
            /*Mostrar img*/
            <TouchableOpacity style={styles.botonGen}>
                <Text style={styles.textBoton}>Acceder</Text>
            </TouchableOpacity>
        </View>
    );
}