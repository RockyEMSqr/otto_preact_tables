import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import { Table } from '../../index'
import SortableTable from '../../sortableTable'
type Data = { name: string, x: number, y: number, dt: Date, class?: string }
let data: Data[] = [
  { name: 'Foo', x: 5, y: 10, dt: new Date(), class: 'asdfasdf' },
  { name: 'Foo', x: 5, y: 10, dt: new Date() }
]
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <SortableTable class="table" style="width:100%" data={data} headers={["Name", "X", "Y", "DateTime"]}
        rowDef={(
          {
            class: 'string',
            columns: [
              x => x.name,
              x => x.x,
              x => x.y,
              { column: x => x.dt, class: 'asdf' }
            ]
          })}

      />
      <Table class="table" style="width:100%" data={data} headers={["Name", "X", "Y", "DateTime"]}
        rowDef={(
          {
            class: 'string',
            columns: [
              x => x.name,
              x => x.x,
              x => x.y,
              { column: x => x.dt, class: 'asdf' }
            ]
          })}

      />
      <Table class="table" style="width:100%" data={data} headers={["Name", "X", "Y", "DateTime"]}
        columns={[
          x => x.name,
          x => x.x,
          x => x.y,
          { column: x => x.dt, class: 'asdf' }
        ]}
      />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
