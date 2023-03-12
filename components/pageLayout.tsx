import { View, Text } from 'react-native';
import React from 'react';
import { Box } from 'native-base';

const  PageLayout: React.FC<any> = ({ children, ...props }): JSX.Element => (
  <Box flex={1} p={4} {...props}>
    {children}
  </Box>
);

export default PageLayout;
