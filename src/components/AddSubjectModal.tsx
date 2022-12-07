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
      subjectName: "",
      creditCount: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Adaugă materie
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Adaugă materie</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel htmlFor="subjectName">Nume materie</FormLabel>

              <Input
                id="subjectName"
                name="subjectName"
                onChange={formik.handleChange}
                value={formik.values.subjectName}
              />

              <FormLabel htmlFor="creditCount">Credite</FormLabel>
              <Input
                id="creditCount"
                name="creditCount"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.creditCount}
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
