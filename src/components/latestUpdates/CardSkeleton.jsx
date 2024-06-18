import React from "react";

function CardSkeleton() {
  return (
    <div className="skeleton w-100 h-[330px] bg-slate-50 rounded-md p-3 mb-3">
      <div className="h-[230px] bg-slate-200 rounded-md"></div>
      <div className="h-8 bg-slate-200 mt-3"></div>
      <div className="h-4 bg-slate-200 mt-2"></div>
    </div>
  );
}

export default CardSkeleton;
