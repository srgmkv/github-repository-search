import React, { ReactNode } from 'react'

type Props = {
  spec?: string
}

const errorMessage: string =
  `Error occured.  
Check for incorrect symbols or try later`

const noResMessage: string =
  `There is no result on this request.
Try it to change.`


const background = (element?: ReactNode) => {
  return <div id="image">{element}</div>
}
const message = (str: string) => {
  return <div id="message">{str}</div>
}

const BGimage = (props: Props) => {
  switch (props.spec) {
    case ('error'):
      return background(message(errorMessage))

    case ('no-result'):
      return background(message(noResMessage))

    default:
      return background()
  }
}

export default BGimage;