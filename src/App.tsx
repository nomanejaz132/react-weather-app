import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-5">
      <Button variant="outline">Button</Button>
      <Button
        variant="destructive"
        className="px-2"
        size="sm"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "clear",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Delete
      </Button>
    </div>
  );
}

export default App;
