import { Header } from "./components/Header"
import RoutesApp from "./routes"





function App() {


  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed w-full">
        <Header />
      </div>
      <main className="flex-1 mt-10">
        <RoutesApp />
      </main>

    </div>
  )
}

export default App
