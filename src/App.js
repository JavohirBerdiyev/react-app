import Test from "./Person/Person";
import todos from "./todo";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Salom React</p>
      {
        todos.map((todo) => (
          <div>
            <p>{todo.name}</p>
            <img src={todo.img} alt="img" width="50" height="50" />
          </div>
        ))
      }
      <Test color="green">Salom katta odamlar</Test>
    </div>
  );
}

export default App;
