import React from "react";
// Redux
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

// Reducers
import globalReducer from "./src/states/word";

// Global styles
import { createGlobalStyle } from 'styled-components';

// Tools
import theme from "./src/utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: white;
    background-color: ${theme.colors.primary};
    
    @font-face {
      font-family: 'Mona Sans';
      src: url('./src/font/Mona-Sans.ttf') format("truetype-variations");
    }

    font-family: 'Mona Sans', sans-serif;
  }
`;

const withProvider = ({ element }) => {
  const rootReducer = combineReducers({
    global: globalReducer,
  });
  const composedEnhancer = compose(applyMiddleware(thunkMiddleware));
  const store = createStore(rootReducer, composedEnhancer);

  return (
    <Provider store={store}>
      <GlobalStyle />
      {element}
    </Provider>
  );
};

export default withProvider;