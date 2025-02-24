import "./index.css";

import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div className="relative z-10 container mx-auto p-8 text-center">
      <div className="mb-8 flex items-center justify-center gap-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-36 scale-120 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-36 [animation:spin_20s_linear_infinite] p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
        />
      </div>

      <Card className="bg-card/50 border-muted backdrop-blur-sm">
        <CardContent className="pt-6">
          <h1 className="my-4 text-5xl leading-tight font-bold">Bun + React</h1>
          <p>
            Edit{" "}
            <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
          <APITester />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
