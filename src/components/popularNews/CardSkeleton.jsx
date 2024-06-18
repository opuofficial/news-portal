import React from "react";

function CardSkeleton() {
  return (
    <div className="skeleton w-100 bg-slate-50 rounded-md flex p-3 mb-3 items-start">
      <div className="h-[45px] w-[80px] bg-slate-200 rounded-md"></div>
      <div className="h-7 w-full ml-2 rounded-md bg-slate-200"></div>
    </div>
  );
}

export default CardSkeleton;
