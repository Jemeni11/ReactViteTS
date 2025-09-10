import { ResponsiveImage } from "@responsive-image/react";

import LockScreen from "./lock-screen.jpeg?responsive";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-y-8">
        <p className="text-9xl font-black">Hello World</p>
        <span className="text-5xl font-bold">ReactViteTS</span>
        <div className="w-1/2">
          <ResponsiveImage src={LockScreen} />
        </div>
      </div>
    </div>
  );
}
