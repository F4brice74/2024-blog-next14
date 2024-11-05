"use client";
import {
  AppShell,
  Burger,
  ColorSchemeScript,
  Group,
  MantineProvider
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Links } from "../components/Links/Links";
import SessionWrapper from "../components/SessionWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <SessionWrapper>

        <MantineProvider>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { desktop: true, mobile: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md" >
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Group justify="space-between" style={{ flex: 1 }}>
                  <Group ml="xl" gap={0} visibleFrom="sm">
                    <Links />
                  </Group>
                </Group>
              </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
              <Links />
            </AppShell.Navbar>

            <AppShell.Main> 

              {children}
              </AppShell.Main>
          </AppShell>
        </MantineProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
