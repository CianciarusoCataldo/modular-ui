import EmptyForm from "app/forms/Empty";

const FORMS: Record<ModalType, () => JSX.Element> = {
  EMPTY: EmptyForm,
};

export default FORMS;
