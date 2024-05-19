import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "../../../components/BUtton/Button";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";
import { RootStackParamList } from "../../../routes/routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

export function ForgotPasswordScreen({ navigation }: ScreenProps) {

    const { reset } = useResetNavigationSucess()

    function submitForm() {
        // TODO: 

        reset({
            title: 'Enviamos as instruções para seu e-mail',
            message: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'primary'
            }
        })

        // navigation.navigate('SuccessScreen', {
        //     title: 'Enviamos as instruções para seu e-mail',
        //     message: 'Clique no link enviado no seu e-mail para recuperar sua senha',
        //     icon: {
        //         name: 'messageRound',
        //         color: 'primary'
        //     }
        // })

    }
    return (
        <Screen canGoBack>
            <Text mb="s16" preset="headingLarge">Esqueci minha senha</Text>
            <Text mb="s32" preset="paragraphLarge">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>

            <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's40' }}
            />

            <Button title="Recuperar senha" onPress={submitForm} />
        </Screen>
    )
}