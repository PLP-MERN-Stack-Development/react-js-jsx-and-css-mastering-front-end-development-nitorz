import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

export default function ThemeToggle(){
  const { theme, toggle } = useTheme()
  return (
    <Button variant="secondary" onClick={toggle}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </Button>
  )
}
