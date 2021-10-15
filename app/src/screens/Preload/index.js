import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Image, Text, StyleSheet } from 'react-native';

import { Container, LoadingIcon } from './styles';

export default () => {

    const navigation = useNavigation();
    
    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            
            if(token !== null) {
                //validar o token
            } else {
                navigation.navigate('SignIn');
            }
        }
        setTimeout(() => {
            checkToken();
        }, 2000);
        

    }, []);

    return (
        <Container>
            <Image 
                source={require('../../assets/amc-transito-e-cidadania1.png')}
                style={{ width: 450, height: 360 }}
            />

            <Text style={styles.sigec}>SIGEC</Text>
            <Text style={styles.titulosigec}>Sistema de Gerenciamento de Trânsito</Text>

            <LoadingIcon size="large" color="#FFFFFF" />
            
        </Container>
    );
}

const styles = StyleSheet.create({
    sigec: {
        fontFamily: 'OpenSans-Bold', 
        fontSize: 26, 
        color: '#B16208',
        
    },
    titulosigec: {
        fontFamily: 'OpenSans-ExtraBold',
        fontSize: 18,
        color: '#B16208'
    },
});