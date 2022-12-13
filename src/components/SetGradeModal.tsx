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
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Form, useParams } from "react-router-dom";
import { gradesEndpoint, IGradePostAPI } from "../api/GenericApi";
import { IDataTableRow } from "./DataTable";
import { genericAddModalSave, IModal } from "./GenericModal";

const Component = (props: {
  onSave: { (): void };
  isOpen: any;
  onClose: any;
  onOpen: any;
  data?: IDataTableRow;
}) => {
  const initialValues = {
    name: "",
    grade: 0,
  };

  let { courseId } = useParams();
  console.log("saluuuut", props);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const parsedValues: IGradePostAPI = {
        studentId: props.data![0],
        grade: values.grade,
        courseId: parseInt(courseId!),
      };
      console.log("parsedValues", parsedValues);
      genericAddModalSave(
        parsedValues,
        gradesEndpoint,
        props.onSave,
        props.onClose
      );
    },
  });

  if (!props.data) {
    return <></>;
  }
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <Form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Acordă notă</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel htmlFor="name">
                Nume student: {props.data[1] ?? ""} {props.data[2] ?? ""}{" "}
              </FormLabel>

              <FormLabel htmlFor="grade">Notă</FormLabel>
              <Input
                id="grade"
                name="grade"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.grade}
              />
            </ModalBody>

            <ModalFooter>
              <ButtonGroup>
                <Button onClick={props.onClose} mr={3} variant="ghost">
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
