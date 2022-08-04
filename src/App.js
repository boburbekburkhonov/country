import Header from "./component/Header";
import Search from "./component/Search";
import Country from "./component/Country";
import "./index.css"

function App() {
  return (
    <>
      <Header />
      <main className="main">
      <Country/>
      </main>
    </>
  )
}

export default App;
