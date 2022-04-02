import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Text, Link } from '@nextui-org/react';

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Xelo | Sell It</title>
          <meta name='description' content='Xelo offical app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Container
          as='main'
          display='flex'
          direction='column'
          justify='center'
          alignItems='center'
          style={{ height: '100vh' }}
        >
          <Text h1>
            Welcome to&nbsp;
            <Link color='text' href='#' rel='noopener noreferrer'>
              Xelo!
            </Link>
          </Text>
        </Container>
      </div>
    </div>
  );
};

export default Home;
