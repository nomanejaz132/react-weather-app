import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-5">
      <Button
        variant="outline"
        className="rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-violet-600 hover:text-white focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
      >
        Button
      </Button>
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
