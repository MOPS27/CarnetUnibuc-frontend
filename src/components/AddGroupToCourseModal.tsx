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
import { useParams } from "react-router";
import { Form } from "react-router-dom";
import { coursesEndpoint } from "../api/GenericApi";
import { genericAddModalSave, IModal } from "./GenericModal";

const Component = (props: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let { courseId } = useParams();

  const initialValues = {
    groupId: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      genericAddModalSave(
        null,
        `${coursesEndpoint}/${courseId}/groups/${values.groupId}`,
        props.onSave,
        onClose
      );
    },
  });

  return (
    <>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Adaugă grupă
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Adaugă grupa la curs</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel htmlFor="groupId">Grupa</FormLabel>

              <Input
                id="groupId"
                name="groupId"
                onChange={formik.handleChange}
                value={formik.values.groupId}
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
