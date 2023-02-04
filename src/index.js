import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Comments from "./Comments";
import Posts from "./Posts";
import Todo from "./Todo";
import StateMangmt from "./StateMangmt";
import RefHook from "./RefHook";
import ComponentC from "./UseContext/ComponentC";
import ReducerHook from "./ReducerHook";
import ParentComponent from "./UseCallBack/ParentComponent";
import ParentCom from "./CustomHooks/ParentCom";
import CounterOne from "./CustomHooks/CounterOne";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
export const UserContext = React.createContext();
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={"index.js"}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/state" element={<StateMangmt />} />
          <Route path="/ref" element={<RefHook />} />
          <Route path="/context" element={<ComponentC />} />
          <Route path="/reducer" element={<ReducerHook />} />
          <Route path="/callback" element={<ParentComponent />} />
          <Route path="/custom" element={<ParentCom />} />
          <Route path="/counter1" element={<CounterOne />} />
        </Routes>
      </UserContext.Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
