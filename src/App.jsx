import Header from "./components/header/header.jsx";
import Input from "./components/input/input.jsx";
import Todo from "./components/todo/todo.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div className="root">
      <Header />
      <Input />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
