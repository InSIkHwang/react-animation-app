import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  height: 300px;
  width: 475px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  position: absolute;
  bottom: 80px;
  height: 35px;
  background-color: rgba(255, 255, 255);
  color: #1567ff;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const boxVar = {
  initial: (i: any) => ({
    scale: 1,
    x: 0,
    y: 0,
  }),
  hover: (i: any) => ({
    scale: 1.1,
    y: -15,
    x: i ? -20 : 20,
  }),
  hover2: (i: any) => ({
    scale: 1.1,
    y: 15,
    x: i ? -20 : 20,
  }),
};

const btnVar = {
  click: {
    color: "#ff7525",
    scale: 1.1,
  },
};

const Circle = styled(motion.div)`
  background-color: #ffffff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box
          onClick={() => setId("1")}
          layoutId="1"
          variants={boxVar}
          initial="initial"
          custom={true}
          whileHover={"hover"}
        ></Box>
        <Box
          onClick={() => setId("2")}
          layoutId="2"
          variants={boxVar}
          initial="initial"
          custom={false}
          whileHover={"hover"}
        >
          {!clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          onClick={() => setId("3")}
          layoutId="3"
          variants={boxVar}
          initial="initial"
          custom={true}
          whileHover={"hover2"}
        >
          {clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          onClick={() => setId("4")}
          layoutId="4"
          variants={boxVar}
          initial="initial"
          custom={false}
          whileHover={"hover2"}
        ></Box>
      </Grid>
      <Button onClick={toggleClicked} variants={btnVar} whileTap="click">
        Switch
      </Button>

      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{ width: 475, height: 300, backgroundColor: "white" }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;