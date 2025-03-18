"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function IdPage() {
  const { id } = useParams();

  return (
    <div className="text-center p-10">
      <div>Id do Cliente: {id}</div>
    </div>
  );
}
