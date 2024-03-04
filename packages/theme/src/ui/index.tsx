import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Theme } from '../theme';

type ToggleButtonProps = PropsWithChildren<{
  name: string
  onPress: () => void;
  isSelected: boolean;
}>;

export function ToggleButtonMain({name, onPress, isSelected}: ToggleButtonProps) {
  const theme = useTheme() as Theme;
  const styles = makeStyles(theme as Theme);

  return (
    <Pressable style={isSelected ? styles.selected : styles.notSelected} onPress={onPress}>
      <Text>{name}</Text>
    </Pressable>
  );
}

const makeStyles = (theme: Theme) => StyleSheet.create({
  selected: {
    backgroundColor: theme.colors.primary,
  },
  notSelected: {
    backgroundColor: theme.colors.primaryContainer,
  },
});
