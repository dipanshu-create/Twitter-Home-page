import "./App.css";
import Home from "./Home";
import Left_bar from "./Left_bar";
import Right_bar from "./Right_bar";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div class="root">
      <div class="left">
        <Left_bar></Left_bar>
      </div>
      <div class="home">
        <Home></Home>
      </div>
      <div class="right">
        <Right_bar></Right_bar>
      </div>
    </div>
  );
}

export default App;
