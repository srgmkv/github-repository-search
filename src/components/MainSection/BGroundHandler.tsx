import React, { ReactNode } from 'react'

type Props = {
  spec?: string
}

/* Компонент для отрисовки трех вариаций фона:
1. Дефолтный бэкграунд
2. Он же с сообщением об ошибке
3. Он же с сообщением о пустой выдаче */

const BackgroundImageHandler = (props: Props) => {
  switch (props.spec) {
    case ('error'): 
      return background(message(errorMessage));//див с фоном, внутри див с error сообщением

    case ('no-result'): 
      return background(message(noResMessage));//див с фоном, внутри див с no-res сообщением

    default: // здесь див с фоном
      return background();
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