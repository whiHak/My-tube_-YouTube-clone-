import { createContext, useReducer } from "react";

export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    snippet: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "VideoSelected":
        return {
          snippet: action.payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <VideoContext.Provider value={{ data: state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
