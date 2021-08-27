import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function Mediaview({ media, children }) {
  const videoRef = React.useRef(null)

  if (media[0].mimetype === 'video') {
    return (
      <Box
        position="relative"
        onMouseEnter={() => onMouseOver(videoRef)}
        onMouseOut={() => onMouseOut(videoRef)}
      >
        <video
          ref={videoRef}
          style={{ height: '230px', borderRadius: '8px', objectFit: 'cover' }}
          muted
        >
          <source
            src={`${media[0]?.domain}${media[0]?.path}`}
            type="video/mp4"
          />
        </video>
        {children}
      </Box>
    )
  }
  return (
    <Box position="relative">
      <Image
        height="230px"
        objectFit="cover"
        borderRadius="8px"
        src={`${media[0]?.domain}${media[0]?.path}`}
      />
      {children}
    </Box>
  )
}

function onMouseOver(ref) {
  ref?.current.play()
}
function onMouseOut(ref) {
  ref?.current.pause()
}
