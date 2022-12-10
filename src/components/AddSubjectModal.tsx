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
import { subjectEndpoint } from "../api/GenericApi";
import { ISubjectAPI } from "../api/SubjectsApi";
import { genericAddModalSave, IModal } from "./GenericModal";

const Component = (props: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues: ISubjectAPI = {
    name: "",
    creditCount: 1,
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      genericAddModalSave(values, subjectEndpoint, props.onSave, onClose);
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
              <FormLabel htmlFor="name">Nume materie</FormLabel>

              <Input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
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
