import { Image, Text, Flex, Input, Textarea } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import imagePlaceHolder from '../../../assets/picture-placeholder.png'
import ImagePickerHeader from './ImagePickerHeader'

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
}

const activeStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
}

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
}

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
}

export default function Previews(props) {
  const [files, setFiles] = React.useState([])
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*, video/*',
    maxFiles: 5,
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  )

  const thumbs = (
    <>
      <Image src={files[0]?.preview} />
      <Flex
        gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))"
        gap={10}
      >
        {files?.slice(1, files.length).map(file => (
          <div style={thumb} key={file.name}>
            <div style={thumbInner}>
              <Image objectFit="cover" src={file.preview} />
            </div>
          </div>
        ))}
      </Flex>
    </>
  )

  React.useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <Flex direction="column" align="center">
      <ImagePickerHeader />
      <Flex {...getRootProps({ style })}>
        <input className="inputImages" name="images[]" {...getInputProps()} />
        {files?.length > 0 && <ShotForm thumbs={thumbs} />}
        {files?.length === 0 && (
          <Flex direction="column" align="center">
            <Image
              src={imagePlaceHolder}
              width="80px"
              mb="12px"
              height="86px"
            />
            <Text mb="12px">Drag and drop an image, or Browse</Text>
            <Text>
              1600x1200 or higher recommended. Max 10MB each (20MB for videos)
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

const ShotForm = thumbs => (
  <Flex maxWidth="55%" direction="column" align="center" gridRowGap="14px">
    <Input
      px="0"
      variant="ghost"
      fontWeight="bold"
      fontSize="3xl"
      placeholder="give me a name"
    />
    {thumbs}
    <Textarea
      px="0"
      variant="ghost"
      fontSize="2xl"
      placeholder="Write what went into this shot, and anything else you’d like to mention"
    />
  </Flex>
)
