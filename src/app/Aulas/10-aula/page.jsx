"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";
import AvatarComponent from "./AvatarComponent";

export default function LoginGitHub() {
  const [login, setLogin] = useState(null);
  const id = 1;

  async function Logar() {
    const res = await fetch(`http://localhost:3000/api/gitHub/${id}`);
    const data = await res.json();
    console.log(data);
    setLogin(data);
  }

  function DeslogarLogar() {
    setLogin(null);
  }

  return (
    <div className="bg-gray-100 w-screen h-[7vh] flex items-center justify-between px-12 py-2">
      <div className="w-10 h-full ">
        {login && login.photo ? (
          <AvatarComponent photo={login.photo} />
        ) : (
          <AvatarComponent photo="https://github.com/shadcn.png" /> // Caso não haja foto, exibe o fallback
        )}
      </div>
      <div className="w-auto h-full">
        <CoolMode >
          <Button onClick={Logar}>Login</Button>
        </CoolMode>
        <CoolMode>
          <Button onClick={DeslogarLogar}>Sair</Button>
        </CoolMode>
      </div>
    </div>
  );
}
