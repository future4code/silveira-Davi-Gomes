import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function PostPage() {
  useProtectedPage()
  return (
    <div>PostPage</div>
  )
}
