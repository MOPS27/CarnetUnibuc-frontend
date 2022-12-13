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
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import {
  coursesEndpoint,
  genericApiGet,
  ICoursePostAPI,
  subjectEndpoint,
} from "../api/GenericApi";
import { genericAddModalSave, IModal } from "./GenericModal";

export interface IAddModal {
  title: string;
}

const Component = (props: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [subjects, setSubjects] = useState<any>();
  const [subjectOptions, setSubjectOptions] = useState<any>();
  const initialValues: ICoursePostAPI = {
    professorName: "",
    subjectId: 1,
    calendarYearName: "",
  };

  useEffect(() => {
    if (!subjects) return;
    const options = subjects.map((subject: any) => {
      return <option value={subject[0]}>{subject[1]}</option>;
    });
    setSubjectOptions(options);
  }, [subjects]);

  useEffect(() => {
    genericApiGet(subjectEndpoint).then((subjects) => {
      console.log(subjects);
      setSubjects(subjects);
    });
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      genericAddModalSave(values, coursesEndpoint, props.onSave, onClose);
    },
  });

  if (!subjects) {
    return <></>;
  }

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

              <Select
                id="subjectId"
                name="subjectId"
                onChange={formik.handleChange}
                value={formik.values.subjectId}
              >
                {subjectOptions}
              </Select>

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
