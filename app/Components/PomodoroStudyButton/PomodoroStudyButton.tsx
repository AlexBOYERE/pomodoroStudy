import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export function PomodoroStudyButton(props: TouchableOpacityProps) {
    return <Container {...props} />;
}

export const Container = styled(TouchableOpacity)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  border: 2px solid #f54477;
`;


