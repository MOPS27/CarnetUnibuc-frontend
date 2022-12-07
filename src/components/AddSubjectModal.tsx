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
} from "@chakra-ui/react";

export interface IAddModal {
  title: string;
}

const Component = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Adaugă materie
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adaugă materie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Blablabla</ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button onClick={onClose} mr={3} variant="ghost">
                Închide
              </Button>
              <Button leftIcon={<AddIcon />} colorScheme="teal">
                Adaugă
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Component;
