import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export const useWindowDimensions = () => {getWindowDimensions())
  const [ windowDimensions, setWindowDimensions ] = useState()
  const handleResize = () => { setWindowDimensions(getWindowDimensions())}

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[])
  return windowDimensions
}