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
import { coursesEndpoint, ICourseAPI } from "../api/GenericApi";
import { genericAddModalSave, IModal } from "./GenericModal";

export interface IAddModal {
  title: string;
}

const Component = (props: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues: ICourseAPI = {
    professorName: "",
    subjectId: 1,
    calendarYearName: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      genericAddModalSave(values, coursesEndpoint, props.onSave, onClose);
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
              <FormLabel htmlFor="subjectId">Materie</FormLabel>

              <Input
                id="subjectId"
                name="subjectId"
                onChange={formik.handleChange}
                value={formik.values.subjectId}
              />

              <FormLabel htmlFor="professorName">Nume profesor</FormLabel>
              <Input
                id="professorName"
                name="professorName"
                onChange={formik.handleChange}
                value={formik.values.professorName}
              />
              <FormLabel htmlFor="calendarYearName">An universitar</FormLabel>

              <Input
                id="calendarYearName"
                name="calendarYearName"
                onChange={formik.handleChange}
                value={formik.values.calendarYearName}
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
