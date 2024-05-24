import {
    Box,
    Text,
    TouchableOpacityBox,
} from "@components";

import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";

import { useAppSafeArea, useAppTheme } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Icon } from "../Icon/Icon";

interface ScreenProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {
    const { top, bottom } = useAppSafeArea()
    const { colors } = useAppTheme()

    const navigation = useNavigation()

    const Container = scrollable ? ScrollViewContainer : ViewContainer

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={colors.background}>
                <Box
                    paddingHorizontal="s24"
                    paddingBottom="s24"
                    style={{ paddingTop: top, paddingBottom: bottom }}>
                    {canGoBack &&
                        <TouchableOpacityBox
                            onPress={navigation.goBack}
                            marginBottom="s24"
                            flexDirection="row"
                        >
                            <Icon name="arrowLeft" color="primary" />
                            <Text preset="paragraphMedium" semiBold marginLeft="s8">Voltar</Text>
                        </TouchableOpacityBox>
                    }
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    )
}