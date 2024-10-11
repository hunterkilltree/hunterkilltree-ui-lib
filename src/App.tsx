import { Button } from "./lib/main";

function App() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="blue">Blue</Button>
      <Button color="gray">Gray</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="success">Success</Button>
      <Button color="failure">Failure</Button>
      <Button color="warning">Warning</Button>
      <Button color="purple">Purple</Button>
      <Button pill>Default</Button>
      <Button color="blue" pill>
        Blue
      </Button>
      <Button color="gray" pill>
        Gray
      </Button>
      <Button color="dark" pill>
        Dark
      </Button>
      <Button color="light" pill>
        Light
      </Button>
      <Button color="success" pill>
        Success
      </Button>
      <Button color="failure" pill>
        Failure
      </Button>
      <Button color="warning" pill>
        Warning
      </Button>
      <Button color="purple" pill>
        Purple
      </Button>
    </div>
  );
}

export default App;
