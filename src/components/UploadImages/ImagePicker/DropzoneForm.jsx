import { Flex, Image, Input, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

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

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
}

export default function DropzoneForm(props) {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, video/*',
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

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Image src={file.preview} style={img} />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input className="inputImages" name="images[]" {...getInputProps()} />
        {files.length < 1 && (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {files.length > 0 && (
        <Flex
          maxWidth="55%"
          gridRowGap="10px"
          direction="column"
          align="center"
          justify="center"
        >
          <Input
            className="inputTitle"
            px="0"
            variant="ghost"
            fontWeight="bold"
            fontSize="3xl"
            placeholder="give me a name"
          />
          <Flex width="55%" align="center">
            {thumbs}
          </Flex>
          <Textarea
            className="inputDescription"
            px="0"
            variant="ghost"
            fontSize="2xl"
            placeholder="Write what went into this shot, and anything else you’d like to mention"
          />
        </Flex>
      )}
    </section>
  )
}
