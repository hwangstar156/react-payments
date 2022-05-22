import ModalButton from "component/common/ModalButton/ModalButton.component";

export default {
  title: "Common/ModalButton",
  component: ModalButton,
};

export const EditModalButton = (args) => (
  <ModalButton {...args}>수정하기</ModalButton>
);
EditModalButton.args = {
  type: "edit",
};

export const DeleteModalButton = (args) => (
  <ModalButton {...args}>삭제하기</ModalButton>
);
DeleteModalButton.args = {
  type: "delete",
};
