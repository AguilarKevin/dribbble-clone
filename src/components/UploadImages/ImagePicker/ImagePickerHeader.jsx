import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function ImagePickerHeader() {
  return (
    <div>
      <Heading as="h3" size="lg" mb="6" mt="22px">
        What are you working on?
      </Heading>
      <Text color="gray.600">
        Upload your design. This will also be used as the thumbnail in feeds.
      </Text>
    </div>
  );
}
