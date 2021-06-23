import "./styles.css";
import Button from "./components/button";

const App = () => {
  const button_list = [];

  for (let i = 0; i < 5; i++) {
    button_list.push(<Button key={i} id={i} />);
  }

  return (
    <main className="App">
      <h1>Welcome to React</h1>
      <section>{button_list}</section>
    </main>
  );
};

export default App;
