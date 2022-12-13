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
import { useFilePicker } from "use-file-picker";
import { studentsEndpoint, studyProgramsEndpoint } from "../api/GenericApi";
import { genericAddModalSave, IModal } from "./GenericModal";

export interface IStudyProgramsAPI {
  id?: number;
  name: string;
  numberOfYears: number;
}

const Component = (props: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: ".json",
    multiple: false,
  });
  const initialValues: IStudyProgramsAPI = {
    name: "",
    numberOfYears: 0,
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const students = JSON.parse(filesContent[0].content);
      console.log("studenti", students);
      genericAddModalSave(students, studentsEndpoint, props.onSave, onClose);
    },
  });

  return (
    <>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Importă listă studenți
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Adaugă program de studiu</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <Button onClick={() => openFileSelector()}>
                  Selectează fișier
                </Button>
                {filesContent.map((file, index) => (
                  <div>
                    <h2>{file.name}</h2>
                    <br />
                  </div>
                ))}
              </div>
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
