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
      firstName: "",
      lastName: "",
      email: "",
      group: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Adaugă student
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Adaugă student</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel htmlFor="lastName">Nume</FormLabel>

              <Input
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />

              <FormLabel htmlFor="firstName">Prenume</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <FormLabel htmlFor="email">Adresă e-mail</FormLabel>

              <Input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FormLabel htmlFor="group">Grupă</FormLabel>

              <Input
                id="group"
                name="group"
                onChange={formik.handleChange}
                value={formik.values.group}
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
