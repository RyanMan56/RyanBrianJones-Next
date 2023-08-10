import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Page from "../components/Page";
import styles from "../styles/Homepage.module.scss";
import Cube from "../components/three/Cube";
import { Vector3 } from "three";
import Sphere from "../components/three/Sphere";

const extraTitles = ["Freelancer", "Contractor", "Developer"];

const title = "Ryan Brian Jones";

const Title = () => <h1 aria-label="Ryan Brian Jones">Ryan Brian Jones</h1>;
const AnimatableTitle = () => {
  const splitTitle = title.split(" ");
  let currentLetterIndex = 0;
  return (
    <h1 aria-label="Ryan Brian Jones">
      {splitTitle.map((word, wordIndex) => {
        const letters = wordIndex === splitTitle.length - 1 ? word : `${word} `;
        return (
          <span className={styles.word} key={`word_${wordIndex}`}>
            {[...letters].map((letter, letterIndex) => (
              <span
                style={{ animationDelay: `${currentLetterIndex++ * 100}ms` }}
                className={styles.letter}
                key={`letter_${currentLetterIndex}`}
              >
                {letter}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
};

function Homepage({}) {
  const canvasRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const [extraTitle, setExtraTitle] = useState({
    current: "",
    selectedIndex: -1,
    reverse: true,
    waitCycles: null,
  });
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExtraTitle((prevValue) => {
        let newValue = { ...prevValue };

        if (!newValue.waitCycles) {
          if (prevValue.current.length <= 0) {
            newValue.reverse = true;
            newValue.selectedIndex =
              (prevValue.selectedIndex + 1) % extraTitles.length;
            newValue.waitCycles = 20;
          } else if (
            prevValue.current.length ===
            ` ${extraTitles[prevValue.selectedIndex]}`.length
          ) {
            newValue.reverse = false;
            newValue.waitCycles = 40;
          }
        }

        if (newValue.waitCycles) {
          newValue.waitCycles--;
        }
        if (!newValue.waitCycles) {
          if (newValue.reverse) {
            newValue.current = ` ${extraTitles[newValue.selectedIndex]}`.substr(
              0,
              prevValue.current.length + 1
            );
          } else {
            newValue.current = prevValue.current.substr(
              0,
              prevValue.current.length - 1
            );
          }
        }
        return newValue;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  // useEffect(() => {
  //   console.log(sceneRef.current);
  //   sceneRef.current.add(cameraRef.current);
  // }, []);

  return (
    <Page>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.titleWrapper}>
            {pageLoaded ? ( // so that crawlers get the title in just a h1
              <AnimatableTitle />
            ) : (
              <Title />
            )}
            <span className={styles.extraTitle}>{extraTitle.current}</span>
            <span className={styles.cursor}>_</span>
          </div>
          <p className={styles.bio}>
            Hi, I'm Ryan. A full-stack software engineer based in Liverpool.
          </p>
          <p className={styles.bio}>
            I develop web apps, mobile apps (and sometimes games),
          </p>
          <p className={styles.bio}>
            and make sure they're reliable and cheap to run.
          </p>
          <div className={styles.buttonWrapper}>
            <Link href="/contact">
              <a className={styles.buttonPrimary}>Get in touch</a>
            </Link>
            <Link href="/my-work">
              <a>My work</a>
            </Link>
          </div>
        </div>
        <div className={styles.logo}>
          <Canvas ref={canvasRef} camera={{ position: [0, 0, 10] }}>
            <ambientLight />
            {/* @ts-ignore TODO: Figure out this typing issue */}
            <directionalLight color={0xffffff} position={[-5, -2, 5]} />
            <Cube />
            <Sphere
              position={[0, 0, 3]}
              rotationAxis={new Vector3(1, 1, 0)}
              radius={0.5}
              color={0x8039db}
            />
            <Sphere
              position={[0, 0, -4]}
              rotationAxis={new Vector3(1, -1, 0)}
              radius={0.25}
              color={0xf568ab}
            />
            <Sphere
              position={[0, 0, -3]}
              rotationAxis={new Vector3(0, 1, 0)}
              radius={0.35}
              color={0x5a39db}
            />
          </Canvas>
        </div>
      </div>
    </Page>
  );
}

export default Homepage;
