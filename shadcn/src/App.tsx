import {Button} from "@/components/ui/button";
import {CirclePlus} from "lucide-react";
function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Button variant="destructive" size={"lg"}>
        <CirclePlus />
        Click me
      </Button>
    </div>
  );
}

export default App;
