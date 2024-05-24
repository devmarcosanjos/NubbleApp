import { useTheme } from "@shopify/restyle";
import {
    Theme,
    ThemeColors
} from "@theme";
import React from "react";
import { ActivityIndicatorProps, ActivityIndicator as NRActivityIndicator } from "react-native";

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
    color: ThemeColors
}

export function ActivityIndicator({ color }: Props) {

    const { colors } = useTheme<Theme>()
    return <NRActivityIndicator
        color={colors[color]}
    />
}