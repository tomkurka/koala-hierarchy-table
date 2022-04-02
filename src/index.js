import React from "react"
import App from "./App"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import { store } from "./redux/store"

import "./styles/global.scss"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
