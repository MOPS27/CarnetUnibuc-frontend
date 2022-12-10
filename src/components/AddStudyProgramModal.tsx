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
import { studyProgramsEndpoint } from "../api/GenericApi";
import { genericAddModalSave, IModal } from "./GenericModal";

export interface IStudyProgramsAPI {
  id?: number;
  name: string;
  numberOfYears: number;
}

const Component = (props: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues: IStudyProgramsAPI = {
    name: "",
    numberOfYears: 0,
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      genericAddModalSave(values, studyProgramsEndpoint, props.onSave, onClose);
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
              <FormLabel htmlFor="name">Nume program de studiu</FormLabel>

              <Input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              <FormLabel htmlFor="numberOfYears">Număr ani</FormLabel>
              <Input
                id="numberOfYears"
                name="numberOfYears"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.numberOfYears}
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
