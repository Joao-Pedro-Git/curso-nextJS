import React from "react";
import { useRouter } from "next/router";

export default function AulaId() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>ID da Aula: {id}</h1>
    </>
  );
}
