import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  let warna = "black"
  if (count < 0) {
    warna = "red"
  } else if (count > 10) {
    warna = "green"
  }

  return (
    <div className="counter">
      <h2 style={{ color: warna }}>Skor: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter