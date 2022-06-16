import { Button, HStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useUserDataSet } from "../../hooks/useUserDataSet";
import ProjectCard from "../Cards/ProjectCard";
const Projects = () => {
  const user = useUserDataSet();
  const ref = useRef();
  const [scrollPos, setScrollPos] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  const [scrollPosition, setScrollPosition] = useState(0);

  const onMouseDown = (e) => {
    setScrollPos({ ...scrollPos, isScrolling: true, clientX: e.clientX });
  };

  const onMouseUp = () => {
    setScrollPos({ ...scrollPos, isScrolling: false });
  };

  const onMouseMove = (e) => {
    const { clientX, scrollX } = scrollPos;
    if (scrollPos.isScrolling) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX;
      scrollPos.scrollX = scrollX + e.clientX - clientX;
      scrollPos.clientX = e.clientX;
    }
  };

  const scrollLeft = () => {
    setScrollPosition((prev) => prev + 620);
  };
  const scrollRight = () => {
    setScrollPosition((prev) => prev - 620);
  };
  useEffect(() => {
    ref.current.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  return (
    <>
      <HStack>
        <Button onClick={scrollLeft} onMouseEnter={scrollLeft} h="50vh">
          Left
        </Button>
        <HStack
          ref={ref}
          overflowX={"hidden"}
          cursor="grab"
          id="container"
          scrollBehavior={"smooth"}
          // onMouseDown={onMouseDown}
          // onMouseUp={onMouseUp}
          // onMouseMove={onMouseMove}
          bg="gray"
        >
          {user?.projects.map((project) => {
            return (
              <>
                {/* <Text> {project.name} </Text> */}
                <ProjectCard />
              </>
            );
          })}
        </HStack>
        <Button onClick={scrollRight} onMouseEnter={scrollRight} h="50vh">
          Right
        </Button>
      </HStack>
    </>
  );
};

export default Projects;
