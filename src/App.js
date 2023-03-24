import './App.css'

// TODO: make board expandable like 3x3, 4x4, 5x10
export default function Board() {
  return (
    <>
      {BoardRow(1)}
      {BoardRow(4)}
      {BoardRow(7)}
    </>
  )
}

function BoardRow(num) {
  return (
    <div className="board-row">
      {Square(num)}
      {Square(num + 1)}
      {Square(num + 2)}
    </div>
  )
}

function Square(num) {
  return <button className="square">{num}</button>
}
