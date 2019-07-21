import React from 'react'
import { connect } from 'react-redux'
import Results from './Results'
import './Main.scss'
import { IState, ItemModel } from '../../interfaces'
import Image from '../../Images/github.svg'

interface StateProps {
  loading: boolean
  items: ItemModel[]
}

//Компонент генерирует блок под полем ввода
const MainSection = ({ loading, items }: StateProps) => {
   //здесь храним путь к фону по условию, если загрузка или нечего отображать, то пустой фон
  const bgImage: string = loading || items.length > 0 ? '' : Image

  return (
    <div className="main-section">
      <div id="image" style={{backgroundImage: `url(${bgImage})`}}>
        {loading ? <div id="loader" /> : <Results />}
      </div>
    </div>
  )
}

const mapStateToProps = (state: IState): StateProps => ({
  loading: state.loading,
  items: state.items
})

export default connect(mapStateToProps)(MainSection)