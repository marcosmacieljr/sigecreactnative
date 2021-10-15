import React, { useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SignInput from '../../components/SignInput';
import CPFIcon from '../../assets/cpf1.svg';
import EmailIcon from '../../assets/email.svg';
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

    const [cpfField, setCpfField] = useState('');
    const [emailField, setEmailField] = useState('');

    const handleSignClick = () => {

    };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
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
                    IconSvg={CPFIcon}
                    placeholder="Digite seu CPF"
                    value={cpfField}
                    onChangeText={t=>setCpfField(t)}
                />

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <CustomButton onPress={handleSignClick} >
                    <CustomButtonText>GERAR NOVA SENHA</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>Voltar ao Menu inicial?</SignMessageButtonText>
                <SignMessageButtonTextBold>Clique aqui!</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}