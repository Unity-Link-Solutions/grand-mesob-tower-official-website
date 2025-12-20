import React from "react";

interface PhotoFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhotoFrame({ children, className = "" }: PhotoFrameProps) {
  return (
    <div className={`inline-block ${className}`}>
      {/* Outer wood frame */}
      <div className="rounded-md bg-gradient-to-br from-[#6b3f23] to-[#3b2a1b] p-1 shadow-lg">
        {/* Inner bevel / mat */}
        <div className="rounded-sm bg-gradient-to-br from-[#e9dcc8] to-[#f6efe6] p-1">
          {/* Picture area with subtle inner border */}
          <div className="bg-white rounded-sm overflow-hidden shadow-inner ring-1 ring-black/5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
