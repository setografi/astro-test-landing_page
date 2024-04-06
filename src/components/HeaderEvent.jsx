import React from "react";

function HeaderEvent() {
  return (
    <>
      <div className="fixed top-0 left-0 hidden lg:flex items-center justify-center p-2 lg:p-4 bg-BlackText h-[100dvh] border-r-2 border-black z-20">
        <button className="text-WhiteBack text-3xl font-medium cursor-pointer duration-300 transition-all hover:scale-125">
          <i className="ri-more-2-line"></i>
        </button>
      </div>
    </>
  );
}

export default HeaderEvent;
