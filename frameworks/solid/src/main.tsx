/* @refresh reload */
import { render } from 'solid-js/web'

import App from './App.tsx'

const solid = document.getElementById('solid')

render(() => <App />, solid!)
