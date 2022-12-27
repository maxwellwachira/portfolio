import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Container, createStyles, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

import MainLayout from '../layouts/mainLayout/mainLayout';
import { colors } from '../constants/colors';

const useStyles = createStyles((theme) => ({

}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const { width } = useViewportSize();

  return (
    <>
      <Head>
        <title>Maxwell Wachira</title>
        <meta name="description" content="Maxwell Wachira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Box>
          <Container mt={width > 768 ? 70 : 30}>
            <Text color={colors.primaryColor} fz={28}>Hi, my name is</Text>
            <Text color="white" fz={35} fw={600}>Maxwell Wachira.</Text>
            <Text fz={35} color="dimmed">I am a Web3 & Full Stack Software Engineer</Text>
            <Text color="dimmed" fz={20} mt={50}>I love exploring and creating apps 🚀.</Text>
            <Text color="dimmed" fz={20}>I am a lifelong learner 🎓</Text>
            <Text color="dimmed" fz={20} mt={50}>#CODE #COFFEE #REPEAT</Text>
          </Container>
        </Box>
      </MainLayout>
    </>
  )
}

export default Home;