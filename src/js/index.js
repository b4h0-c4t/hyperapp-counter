import { h, app } from "hyperapp";
import '../style/index.scss';

const state = {
  count: 0
}

const actions = {
  down: () => state => state.count > 0 ? ({ count: state.count - 1 }) : null,
  up: () => state => ({ count: state.count + 1 }),
  clear: () => state => ({ count: 0 }),
}

const view = (state, actions) => (
  <main>
    <h1>Hyperapp Counter</h1>
    <h2>{state.count}</h2>
    <div>
      <button onclick={ actions.down }>-</button>
      <button onclick={ actions.up }>+</button>
      <button onclick={ action.clear }>C</button>
    </div>
  </main>
)

export const main = app(state, actions, view, document.body)
