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
import { useParams } from "react-router";
import { Form } from "react-router-dom";
import {
  coursesEndpoint,
  genericApiGet,
  groupsEndpoint,
} from "../api/GenericApi";
import { genericAddModalSave, IModal } from "./GenericModal";

const Component = (props: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groups, setGroups] = useState<any>();
  const [groupOptions, setGroupOptions] = useState<any>();

  let { courseId } = useParams();

  useEffect(() => {
    if (!groups) return;
    const options = groups.map((group: any) => {
      return <option value={group[0]}> {group[1]}</option>;
    });
    setGroupOptions(options);
  }, [groups]);

  useEffect(() => {
    genericApiGet(groupsEndpoint).then((groups) => {
      console.log(groups);
      setGroups(groups);
    });
  }, []);

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

  if (!groups) {
    return <></>;
  }
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
              <Select
                id="groupId"
                name="groupId"
                onChange={formik.handleChange}
                value={formik.values.groupId}
              >
                {groupOptions}
              </Select>

              {/* <Input
                id="groupId"
                name="groupId"
                onChange={formik.handleChange}
                value={formik.values.groupId}
              /> */}
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
