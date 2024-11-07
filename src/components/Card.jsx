import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";

function Card({ user }) {
  return (
    <>
      <article className="w-full bg-[#fff] border border-[#9a9a9a] space-y-3  px-4 py-2.5 rounded-md shadow-sm">
        <nav className="flex flex-row items-center gap-4 ">
          <div className="w-16 h-16">
            <div className="bg-[#dddddd] w-full h-full flex items-center justify-center rounded-full text-2xl font-bold">
              {user.nombre[0]}
              {user.primer_apellido[0]}
            </div>
          </div>
          <div className=" mt-4">
            <h1 className="text-xl font-bold">{`${user.nombre} ${user.primer_apellido}`}</h1>
            <p className="text-sm text-muted-foreground">
              {user.segundo_apellido}
            </p>
            <div className="flex items-center mt-1 text-xs text-muted-foreground">
              <RiAdminLine className="w-3 h-3 mr-1" />
              <span className="capitalize">{user.role}</span>
            </div>
          </div>
        </nav>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <FiPhone className="w-4 h-4 text-primary" />
            <span>{user.celular}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="w-4 h-4 text-primary" />
            <span>{user.correo}</span>
          </div>
          <div className="flex items-center gap-2">
            <TbWorld className="w-4 h-4 text-primary" />
            <span>
             {user.pais}
            </span>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
