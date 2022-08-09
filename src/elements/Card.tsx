import React from "react"

const Card = (props: any) => {
  // eslint-disable-next-line no-console
  console.log(props.children)
  return <div>{props.children}</div>
}

export default Card
