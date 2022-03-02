import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsArrowUpShort } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

const ToTop = () => {
  return (
    <motion.div
      style={{
        // width: 150,
        // height: 150,
        position: "fixed",
        borderRadius: "30px",
        zIndex: 999,
        bottom: "40px",
        right: "40px",

        // backgroundColor: "#fff",
      }}
      animate={{ rotate: 360 }}
      transition={{
        type: "spring",
        damping: 5,
        mass: 0.75,
        stiffness: 50,
      }}
    >
      {" "}
      <Button
        zIndex={998}
        // position={"fixed"}
        // bottom="40px"
        // right={"40px"}
        borderRadius="full"
        overflow={"hidden"}
        onClick={() => scroll.scrollToTop()}
      >
        <BsArrowUpShort size="30px" color="#FF6347" />
      </Button>
    </motion.div>
  );
};

export default ToTop;
