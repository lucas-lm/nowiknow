import React from 'react'
import './form.css'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string
}

const Form: React.FC<FormProps> = props => {
  const { children, title, ...rest } = props

  return (
    <form {...rest}>
      {title && <h1>{title}</h1>}
      {children}
    </form>
  )
}

export default Form
