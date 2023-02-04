// import "./styles.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";
import ClickCounter from "./HigherOrder/ClickCounter";
import HoverCounter from "./HigherOrder/HoverCounter";
import SearchTodos from "./HighOrder/TodoList";
import TodoList from "./HighOrder/TodoList";
import SearchUsers from "./HighOrder/UserList";
import UserList from "./HighOrder/UserList";
import ClickIncrease from "./HOC/ClickIncrease";
import HoverIncrease from "./HOC/HoverIncrease";
import Counter from "./LifeCycleMethods/Counter";
import LifecycleA from "./LifeCycleMethods/LifecycleA";
import NormalComponent from "./PureComponent/NormalComponent";
import PureComponents from "./PureComponent/PureComponent";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        {/* <Button onClick={() => navigate("/posts")}>Posts</Button>
        <Button onClick={() => navigate("/comments")}>Comments</Button>
        <Button onClick={() => navigate("/todo")}>Todo</Button>
        <Button onClick={() => navigate("/state")}>State</Button>
        <Button onClick={() => navigate("/reducer")}>Reducer</Button>
        <Button onClick={() => navigate("/ref")}>Ref</Button>
        <Button onClick={() => navigate("/context")}>Context</Button>
        <Button onClick={() => navigate("/callback")}>callback</Button>
        <Button onClick={() => navigate("/custom")}>Custom Hook</Button>
        <Button onClick={() => navigate("/counter1")}>Counter</Button> */}
        {/* <h1>hello</h1> */}
        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <div>
          <UserList />
          <SearchUsers />
        </div>
        <div>
          <TodoList />
          <SearchTodos />
        </div> */}
        {/* <ClickIncrease />
        <HoverIncrease /> */}
        {/* <NormalComponent />
        <PureComponents />  */}
        {/* <Counter /> */}
        <LifecycleA />
      </Box>
    </div>
  );
}
