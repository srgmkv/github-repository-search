import React, { ReactNode } from 'react'

type specType = {
  spec?: 'error' | 'no-result'
}

// Компонент для отрисовки вариаций бэкграунда 
const BackgroundImageHandler = ({ spec }: specType) => {
  switch (spec) {
    case ('error'):
      return background(message(errorMessage)) //див с фоном, внутри див с error сообщением

    case ('no-result'):
      return background(message(noResMessage)) //див с фоном, внутри див с no-res сообщением

    default: // здесь дефолт див с фоном
      return background()
  }
}

export default BackgroundImageHandler;

const background = (element?: ReactNode) => {
  return <div id="image">{element}</div>
}
const message = (str: string) => {
  return <div id="message">{str}</div>
}

const errorMessage: string =
  `Error occured.  
Check for incorrect symbols or try later`

const noResMessage: string =
  `There is no result on this request.
Try it to change.`