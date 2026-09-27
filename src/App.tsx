import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import RoutesApp from "@/routes"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="flex-1">
        <RoutesApp />
      </main>
      <Footer />
    </div>
  )
}

export default App
