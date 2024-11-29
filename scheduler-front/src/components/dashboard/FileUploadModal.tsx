import { Button, Dialog, FileUpload, Flex, Heading, VStack, Text, Field, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiUpload } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaFileCsv } from "react-icons/fa6";
import { uploadSchedule } from "../../api/schedule";

const FileUploadModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState<string>("");
  const [detail, setDetail] = useState<string>("");

  const closeModal = () => {
    setTitle("");
    setDetail("");
    setFile(undefined);
    onClose();
  };

  const uploadCSV = async () => {
    if (file) {
      await uploadSchedule(title, detail, file);
    }
    closeModal();
  };

  /*========================================================================*/

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => closeModal()} size={"cover"}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content h={"fit-content"} bg={"gray.900"}>
          <Dialog.Header>
            <Flex justifyContent={"space-between"}>
              <Dialog.Title>
                <Heading size={"2xl"}>CSV 파일 업로드</Heading>
              </Dialog.Title>
              <Dialog.CloseTrigger>
                <RiCloseLargeLine size={20} />
              </Dialog.CloseTrigger>
            </Flex>
          </Dialog.Header>
          <Dialog.Body>
            <VStack gap={4}>
              <Field.Root>
                <Field.Label>Title</Field.Label>
                <Input onChange={(e) => setTitle(e.target.value)} />
              </Field.Root>

              <Field.Root>
                <Field.Label>Details</Field.Label>
                <Input onChange={(e) => setDetail(e.target.value)} />
                <Field.HelperText color={"whiteAlpha.900"}>일정을 업데이트하는 이유를 입력해주세요.</Field.HelperText>
              </Field.Root>
              <Field.Root required>
                <Field.Label>File</Field.Label>
                <FileUpload.Root
                  maxFiles={1}
                  onFileAccept={(details) => {
                    setFile(details.files[0]);
                  }}
                >
                  <FileUpload.Dropzone w={"100%"} bg={"gray.800"} border={"none"}>
                    {!file && (
                      <FileUpload.DropzoneContent>
                        <Button>
                          <HiUpload /> CSV File Upload
                        </Button>
                      </FileUpload.DropzoneContent>
                    )}

                    {file && (
                      <FileUpload.Item file={file} bg={"gray.600"} w={"fit-content"} border={"none"}>
                        <FileUpload.ItemPreview type=".*">
                          <Flex>
                            <Text mr={"10px"}>{file.name}</Text>
                            <FaFileCsv size={20} />
                          </Flex>
                        </FileUpload.ItemPreview>
                      </FileUpload.Item>
                    )}
                  </FileUpload.Dropzone>
                  <FileUpload.HiddenInput />
                </FileUpload.Root>
              </Field.Root>
            </VStack>
          </Dialog.Body>
          <Dialog.Footer>
            <Button onClick={() => uploadCSV()}>
              <Text textDecoration={"underline"}>Apply / 적용</Text>
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default FileUploadModal;
