import React from "react";

export default function HeaderEvent() {
  return (
    <>
      <div className="fixed top-0 left-0 flex items-center justify-center p-2 lg:p-4 bg-WhiteBack h-full z-10">
        <div className="text-BlackText text-3xl font-bold duration-300 transition-all hover:scale-125">
          <i className="ri-more-2-line"></i>
        </div>
      </div>
    </>
  );
}
