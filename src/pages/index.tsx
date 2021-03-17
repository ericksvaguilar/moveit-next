import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';

/**
 * Here we can put all the components to mount the page.
 */

import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
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
}

/**
 * Acess to Next.js (Node.js) back-end
 * I can make external request here, so the SEO wil read the response
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
