import { useEffect, useState } from "react";

import ReactCanvasConfetti from "react-canvas-confetti";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    confettiWrapper: {
      width: "100%",
      minHeight: "100vh",
    },
  })
);

const Confetti = ({ setConfetti }) => {
  const classes = useStyles();
  const [showConfetti, setShowConfetti] = useState({
    fire: false,
    reset: false,
  });

  //excute confetti
  useEffect(() => {
    setShowConfetti({ fire: {} });
  }, []);

  //delete confetti after 3 seconds
  setTimeout(() => {
    setConfetti(false);
  }, 3000);

  return (
    <>
      <ReactCanvasConfetti
        angle={90}
        className={classes.confettiWrapper}
        fire={showConfetti}
        colors={[
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ]}
        decay={0.8}
        drift={0}
        gravity={1}
        origin={{
          x: 0.5,
          y: 0.5,
        }}
        particleCount={1000}
        resize
        scalar={1}
        shapes={["circle", "square"]}
        spread={360}
        startVelocity={100}
        ticks={600}
        useWorker
      />
    </>
  );
};

export default Confetti;
