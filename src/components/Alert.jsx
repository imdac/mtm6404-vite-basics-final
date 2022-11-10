function Alert (props) {
  const className = `alert alert-${props.variant}`
  
  return (
  <div className={className} role="alert">
    {props.children}
  </div>
  )
}

export default Alert