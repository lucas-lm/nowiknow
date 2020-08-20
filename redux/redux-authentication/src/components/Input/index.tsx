import React from 'react'
import './input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = props => {
  const { label, ...rest } = props
  return (
    <label>
      {label}
      <input {...rest}/>
    </label>
  )
}

export default Input
