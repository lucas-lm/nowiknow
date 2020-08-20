import React from 'react'
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ok?: true
}

const Button: React.FC<ButtonProps> = props => {
  const { children, ...rest } = props
  return (
    <button {...rest}>
      {children}
    </button>
  )
}

export default Button
