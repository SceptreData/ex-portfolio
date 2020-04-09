import React, { useRef, useEffect } from 'react'
//8 width, 17 height
const CHAR_WIDTH = 9
const CHAR_HEIGHT = 18

const GlitchCanvas = () => {
  const canvasElt = useRef(null)

  return (
    <>
      <canvas ref={canvasElt}></canvas>
      <style jsx>
        {`
          canvas {
            width: 504px;
            height: 90px;
            margin: 0 auto;
            background: lime;
          }
        `}
      </style>
    </>
  )
}

export default GlitchCanvas

// const getTextSize = () => {
//     let c = canvasElt
//     let ctx = canvasElt.current.getContext('2d')
//     ctx.font = '18px inconsolata'
//     let metrics = ctx.measureText('#')
//     let height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
//     console.log(metrics)
//     console.log(metrics.width, height)
//   }
//   useEffect(() => {
//     console.log('Mounted')
//     getTextSize()
//   }, [])
