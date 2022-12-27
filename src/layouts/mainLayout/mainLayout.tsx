import React, { ReactNode, useState } from 'react';
import {
  Anchor,
  AppShell,
  Avatar,
  Burger,
  Divider,
  Drawer,
  Group,
  Header,
  MediaQuery,
  Menu,
  Navbar,
  Space,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useStyles } from './mainLayout.styles';
import { colors } from '../../constants/colors';
import { IconChevronDown, IconChevronRight, IconDashboard, IconLogout } from '@tabler/icons';

type Props = {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  return (
    <AppShell
      navbarOffsetBreakpoint="md"
      fixed
      header={
        <Header height={80} className={`${classes.headerBackground}`} withBorder={false}>
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <div className={classes.burger}>
              <Anchor href="/" ml="xl">
                <Image
                  src='/logo.svg'
                  width={110}
                  height={70}
                  alt='logo'

                />
              </Anchor>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
                color={`${colors.primaryColor}`}
                mr="xl"
              />
            </div>
          </MediaQuery>
          <div className={classes.header}>
            <div className={classes.logo}>
              <Anchor href="/">
                <Image
                  src='/logo.svg'
                  width={150}
                  height={100}
                  alt='logo'
                />

              </Anchor>
            </div>
            <div className={classes.links} style={{ margin: "0 45px" }}>
              <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : ""}`} href="/">Home</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : ""}`} href="/about">About</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/projects" ? classes.active : ""}`} href="/projects">Projects</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/blogs" ? classes.active : ""}`} href="/blogs">Blogs</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/contact" ? classes.active : ""}`} href="/contact">Contact</Anchor>
              <div>
                <Anchor className={`${classes.navitem} ${classes.resume} ${router.pathname === "/auth/login" ? classes.activeResume : ""}`} href="/auth/login" >Resume</Anchor>
              </div>
            </div>
          </div>
        </Header >}

      navbar={< Navbar
        width={{ base: "100%", sm: 0 }}
        hidden={!opened}
      >
        <Drawer
          position='right'
          opened={opened}
          onClose={() => setOpened(false)}
          overlayOpacity={0.55}
          overlayBlur={3}
          transition="rotate-left"
          transitionDuration={250}
          transitionTimingFunction="ease"
          closeButtonLabel={"close"}
        >
          <Divider mb="md" />
          <div className={classes.navbar}>
            <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : ""}`} href="/">Home</Anchor>
            <Space h="xs" />
            <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : ""}`} href="/about">About</Anchor>
            <Space h="xs" />
            <Anchor className={`${classes.navitem} ${router.pathname === "/projects" ? classes.active : ""}`} href="/projects">Projects</Anchor>
            <Space h="xs" />
            <Anchor className={`${classes.navitem} ${router.pathname === "/blogs" ? classes.active : ""}`} href="/blogs">Blogs</Anchor>
            <Space h="xs" />
            <Anchor className={`${classes.navitem} ${router.pathname === "/contact" ? classes.active : ""}`} href="/contact">Contact</Anchor>
            <Space h="xs" />
            <Anchor className={`${classes.navitem} ${classes.resume} ${router.pathname === "/auth/login" ? classes.activeResume : ""}`} href="/auth/login" >Resume</Anchor>
          </div>
        </Drawer>
      </Navbar >}
    >
      {children}
    </AppShell >
  );
}

export default MainLayout;
