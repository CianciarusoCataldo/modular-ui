import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import MODALS from "app/modals";

import { driveWithDarkMode } from "api/helpers/ui-helper";
import { useModalTranslation } from "app/hooks/localization";

import { Modal } from "modular-ui-preview";
import { getModalView } from "api/core/store/internal-slices/modal/selectors";
import { closeModal } from "api/core/store/internal-slices/modal/actions";

/** Custom Modular-app modal */
const AppModal = () => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);
  const { isVisible, type } = useSelector(getModalView);
  const ModalComponent = driveWithDarkMode(Modal);
  const ModalContent = type ? MODALS[type] : <div />;
  const t = useModalTranslation();

  return (
    <ModalComponent
      onClose={onClose}
      title={type ? t(type) : ""}
      hide={!isVisible}
    >
      {ModalContent}
    </ModalComponent>
  );
};

export default AppModal;
