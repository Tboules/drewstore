import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Link as Outlink,
  List,
  ListItem,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Link as Inlink } from "react-router-dom";

const FooterAccordion = ({ insta, fb, twitter }) => {
  return (
    <Accordion allowToggle w="100%" display={{ base: "block", md: "none" }}>
      <AccordionItem>
        <AccordionButton>
          <Heading flex="1" color="accentL" fontSize="3xl">
            Navigate
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <List mt="20px">
            <ListItem>
              <Inlink to="/">HOME</Inlink>
            </ListItem>
            <ListItem>
              <Inlink to="/">CART</Inlink>
            </ListItem>
            <ListItem>
              <Inlink to="/shop">SHOP</Inlink>
            </ListItem>
            <ListItem>
              <Inlink to="/">MY STORY</Inlink>
            </ListItem>
            <ListItem>
              <Inlink to="/">CONTACT</Inlink>
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Heading flex="1" color="accentL" fontSize="3xl">
            Social
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <HStack mt="20px" spacing="20px">
            <Outlink href="/">
              <Image src={twitter} />
            </Outlink>
            <Outlink href="/">
              <Image src={fb} />
            </Outlink>
            <Outlink href="/">
              <Image src={insta} />
            </Outlink>
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FooterAccordion;
