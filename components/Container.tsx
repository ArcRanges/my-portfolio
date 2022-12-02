import React from 'react'

export default function Container({ children, className = ''}: any) {
  return (
    <div className={`container mx-auto ${className}`}>{children}</div>
  )
}
