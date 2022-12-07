import {
  VStack,
  StackDivider,
  Box,
  SimpleGrid,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import { GradientButton } from "../components/GradientButton";
import { IoMdSchool } from "react-icons/io";
import { ImBook } from "react-icons/im";
import { FaClipboardList, FaPenFancy } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export const DashSecretary = () => {
  return (
    <>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="center"
      >
        <Box>
          <Center>
            <Heading size="xl" padding="10">
              Administrare Secretariat
            </Heading>
          </Center>

          <SimpleGrid columns={2} spacing={10}>
            <Box>
              <Link as={RouterLink} to="/study-programs">
                <GradientButton
                  label={"Programe de studiu"}
                  icon={FaClipboardList}
                />
              </Link>
            </Box>
            <Box>
              <Link as={RouterLink} to="/subjects">
                <GradientButton label={"Materii"} icon={ImBook} />
              </Link>
            </Box>
            <Box>
              <Link as={RouterLink} to="/courses">
                <GradientButton label={"Cursuri"} icon={FaPenFancy} />
              </Link>
            </Box>
            <Box>
              <Link as={RouterLink} to="/students">
                <GradientButton label={"Studenți"} icon={IoMdSchool} />
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </>
  );
};
