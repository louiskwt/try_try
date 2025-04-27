import AppSidebar from "./components/AppSidebar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <Navbar />
      </main>
    </>
  );
}

export default App;
