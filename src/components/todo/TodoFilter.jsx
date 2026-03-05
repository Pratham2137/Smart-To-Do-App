import { Button } from "@/components/ui/button"

export default function TodoFilter({ filter, setFilter }) {

  return (

    <div className="flex gap-2 mt-4">

      <Button
        variant={filter === "all" ? "default" : "outline"}
        onClick={() => setFilter("all")}
      >
        All
      </Button>

      <Button
        variant={filter === "active" ? "default" : "outline"}
        onClick={() => setFilter("active")}
      >
        Active
      </Button>

      <Button
        variant={filter === "completed" ? "default" : "outline"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </Button>

    </div>

  )
}