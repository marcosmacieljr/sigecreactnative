import React, { useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = () => {

    };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    };

    return (
        <Container>
            
            <Image 
                source={require('../../assets/logoamc.png')}
                style={{ width: 350, height: 160 }}
            />
            <InputArea>
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick} >
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>Esqueceu sua senha de acesso?</SignMessageButtonText>
                <SignMessageButtonTextBold>Clique aqui!</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}