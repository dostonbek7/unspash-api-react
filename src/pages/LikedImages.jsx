import React from 'react'
import Gallary from '../components/Gallary'
import { useGlobalContext } from '../hooks/useGlobalContext'

function LikedImages() {
  const { likedImages } = useGlobalContext()
  return (
    <>
    <Gallary data = {{results: likedImages}}/>
    </>
  )
}

export default LikedImages