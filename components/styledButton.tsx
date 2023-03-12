import React, { useState } from 'react';
import { Button, IButtonProps } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import { GestureResponderEvent } from 'react-native';

interface IStyledButtonProps extends IButtonProps {
  delayedAction?: boolean;
  delayedColor?: ColorType;
}

const StyledButton: React.FC<IStyledButtonProps> = ({
  color,
  delayedAction,
  delayedColor,
  onPress,
  ...props
}: IStyledButtonProps): JSX.Element => {
  const [currentColor, setCurrentColor] = useState<ColorType>(color);

  const handlePress = (event: GestureResponderEvent): void => {
    if (delayedColor) {
      setCurrentColor(delayedColor);

      setTimeout(() => {
        setCurrentColor(color);
        if (delayedAction && onPress) {
          onPress(event);
        }
      }, 600);
    }

    if (!delayedAction && onPress) onPress(event);
  };

  return (
    <Button
      variant="solid"
      borderRadius={50}
      size="lg"
      onPress={handlePress}
      backgroundColor={currentColor}
      {...props}
    />
  );
};

export default StyledButton;
