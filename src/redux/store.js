import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import { rootReducer } from "./rootReducer"

const middleware = []

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger)
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
