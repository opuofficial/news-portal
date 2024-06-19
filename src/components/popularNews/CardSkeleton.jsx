import React from "react";

function CardSkeleton() {
  return (
    <div className="skeleton w-100 bg-slate-50 rounded-md p-3 mb-3">
      <div className="h-5 w-full mb-2 rounded-md bg-slate-200"></div>
      <div className="h-3 w-full rounded-md bg-slate-200"></div>
    </div>
  );
}

export default CardSkeleton;
