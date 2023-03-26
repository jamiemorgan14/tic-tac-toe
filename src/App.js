import './App.css'

// TODO: make board expandable like 3x3, 4x4, 5x10

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value='1' />
        <Square value='2' />
        <Square value='3' />
      </div>
      <div className="board-row">
        <Square value='4' />
        <Square value='5' />
        <Square value='6' />
      </div>
      <div className="board-row">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}

function Square({ value }) {
  return <button className="square">{value}</button>
}

// export default function Board() {
//   return (
//     <>
//       {BoardRow(1)}
//       {BoardRow(4)}
//       {BoardRow(7)}
//     </>
//   )
// }

// function BoardRow(num) {
//   return (
//     <div className="board-row">
//       {Square(num)}
//       {Square(num + 1)}
//       {Square(num + 2)}
//     </div>
//   )
// }

