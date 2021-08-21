import { Center, Image, Text, Flex } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import imagePlaceHolder from '../../../assets/picture-placeholder.png';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 764,
  minHeight: 400,
  marginBlockStart: 34,
  marginBlockEnd: 34,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 14,
  borderColor: '#dddddd',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#444',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

export default function Dropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: 'image/*' });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <Center>
      <Flex {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Image src={imagePlaceHolder} width="80px" mb="12px" height="86px" />
        <Text mb="12px">Drag and drop an image, or Browse</Text>
        <Text>
          1600x1200 or higher recommended. Max 10MB each (20MB for videos)
        </Text>
      </Flex>
    </Center>
  );
}
