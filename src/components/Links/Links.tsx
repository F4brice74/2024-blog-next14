"use client";

import { Group, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import classes from "./Links.module.css";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const Links = () => {
  return (
    <>
      {links.map((link) => (
        <UnstyledButton className={classes.control} key={link.title}>
          <Link href={link.path}>{link.title}</Link>
        </UnstyledButton>
      ))}
    </>
    
  );
};
