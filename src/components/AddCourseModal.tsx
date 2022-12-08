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
      courseName: "",
      professor: "",
      year: "2022-2023",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Adaugă curs
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Adaugă curs</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel htmlFor="courseName">Nume curs</FormLabel>

              <Input
                id="courseName"
                name="courseName"
                onChange={formik.handleChange}
                value={formik.values.courseName}
              />

              <FormLabel htmlFor="professor">Nume profesor</FormLabel>
              <Input
                id="professor"
                name="professor"
                onChange={formik.handleChange}
                value={formik.values.professor}
              />
              <FormLabel htmlFor="year">An universitar</FormLabel>

              <Input
                id="year"
                name="year"
                onChange={formik.handleChange}
                value={formik.values.year}
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
