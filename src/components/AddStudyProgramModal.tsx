import { AddIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Form } from "react-router-dom";

export interface IAddModal {
  title: string;
}

const Component = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      studyProgramName: "",
      years: 3,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Adaugă program de studiu
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Adaugă program de studiu</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel htmlFor="studyProgramName">
                Nume program de studiu
              </FormLabel>

              <Input
                id="studyProgramName"
                name="studyProgramName"
                onChange={formik.handleChange}
                value={formik.values.studyProgramName}
              />

              <FormLabel htmlFor="years">Număr ani</FormLabel>
              <Input
                id="years"
                name="years"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.years}
              />
            </ModalBody>

            <ModalFooter>
              <ButtonGroup>
                <Button onClick={onClose} mr={3} variant="ghost">
                  Închide
                </Button>
                <Button type="submit" leftIcon={<AddIcon />} colorScheme="teal">
                  Adaugă
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Form>
      </Modal>
    </>
  );
};

export default Component;
