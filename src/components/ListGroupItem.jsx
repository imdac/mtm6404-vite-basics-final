function ListGroupItem (props) {
  const className = `list-group-item ${props.active ? 'active' : ''}`

  function clickHandler () {
    console.log(props.children)

    props.onItemClick(props.id)
  }

  return <li className={className} onClick={clickHandler}>{props.children}</li>
}

export default ListGroupItem