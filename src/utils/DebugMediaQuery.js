import React from "react";

function DebugMediaQuery() {
  return (
    <div className="fixed bottom-0 left-0 z-50 text-xs bg-black text-white p-1">
      <span className="block sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block">xl</span>
    </div>
  );
}

export default DebugMediaQuery;
