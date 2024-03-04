import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Theme } from '@drnlib/theme';

type ToggleButtonProps = PropsWithChildren<{
  name: string
  onPress: () => void;
  isSelected: boolean;
}>;

export function ToggleButton({name, onPress, isSelected}: ToggleButtonProps) {
  const theme = useTheme() as Theme;
  const styles = makeStyles(theme as Theme);

  let selectedStyle = isSelected ? styles.selected : styles.notSelected;
  let selectedTextStyle = isSelected ? styles.textSelected : styles.textNotSelected;

  return (
    <Pressable style={[styles.container, selectedStyle]} onPress={onPress}>
      <Text style={selectedTextStyle}>{name}</Text>
    </Pressable>
  );
}

const makeStyles = (theme: Theme) => StyleSheet.create({
  container: {
    borderRadius: 6,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: theme.colors.primary,
  },
  notSelected: {
    backgroundColor: theme.colors.primaryContainer,
  },
  containerText: {
    
  },
  textSelected: {
    color: theme.colors.onPrimary,
  },
  textNotSelected: {
    color: theme.colors.onPrimaryContainer,
  },
});
