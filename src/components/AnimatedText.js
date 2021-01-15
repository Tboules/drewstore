import { Box, Text, forwardRef } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

export const MotionText = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Text ref={ref} {...chakraProps} />;
  })
);

export const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
