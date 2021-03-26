import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import CompletedChallenges from '../../components/challenge/CompletedChallenges';

import { CountdownProvider } from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

/**
 * Here we can put all the components to mount the page.
 */

import Countdown from '../../components/challenge/Countdown';
import ExperienceBar from '../../components/challenge/ExperienceBar';
import Profile from '../../components/challenge/Profile';

import ChallengeBox from '../../components/challenge/ChallengeBox';

import styles from '../../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = ({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps): JSX.Element => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        {/* Countdown Context stay around the elements that are dependent */}
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
};

/**
 * Acess to Next.js (Node.js) back-end
 * I can make external request here, so the SEO will read the response
 * of these request
 * Before construct the interface Next.js will make the request, get the data
 * and pass to the interface
 *  */
export const getServerSideProps: GetServerSideProps = async ctx => {
  // API Call
  // const user = {
  //   level: 1,
  //   currentExperience: 58,
  //   challengesCompleted: 2,
  // }
  // console.log(user)

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

export default Home;
