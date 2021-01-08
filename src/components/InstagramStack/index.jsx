import React from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import InstagramPic from "./InstagramPic";

//photos
import art from "../../images/Insta/art.jpg";
import backpack from "../../images/Insta/backpack.jpg";
import morocco from "../../images/Insta/moroccan_blanket.jpg";
import totoWave from "../../images/Insta/totoro_wave.jpg";
import flower from "../../images/Insta/flowers.jpg";

const PHOTOS = [backpack, art, morocco, flower, totoWave];

const InstagramStack = () => {
  return (
    <Box mt="100px">
      <Heading textAlign="center">Community</Heading>
      <Text textAlign="center">Follow us on Instagram</Text>
      <Stack direction="row" spacing="none">
        {PHOTOS.map((photo) => (
          <InstagramPic link={photo} />
        ))}
      </Stack>
    </Box>
  );
};

export default InstagramStack;
