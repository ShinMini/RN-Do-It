function CameraView() {
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    const isHotdog = detectIsHotdog(frame)
    console.log(isHotdog ? "Hotdog!" : "Not Hotdog.")
  }, [])

  return (
    <Camera
      {...cameraProps}
      frameProcessor={frameProcessor}
    />
  )
}