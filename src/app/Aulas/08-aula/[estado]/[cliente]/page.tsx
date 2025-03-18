"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function EstadoClient() {
  const { estado, cliente } = useParams();

  return (
    <div className="text-center">
      <br />
      <div>O Estado do cliente é: {estado}</div>
      <br />
      <div>O Cliente é: {cliente}</div>
    </div>
  );
}
