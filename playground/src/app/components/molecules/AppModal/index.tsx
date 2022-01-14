import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import MODALS from "app/modals";

import { Modal } from "modular-ui-preview";
import { useTranslation } from "react-i18next";
import {
  closeModal,
  geti18nConfig,
  getModalType,
  isInDarkMode,
  isModalVisible,
} from "@cianciarusocataldo/modular-engine";

/** Custom Modular-app modal */
const AppModal = () => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);
  const type = useSelector(getModalType);
  const isVisible = useSelector(isModalVisible);
  const I18N = useSelector(geti18nConfig);
  const ModalContent = type && MODALS[type] ? MODALS[type] : <div />;
  const dark = useSelector(isInDarkMode);

  const { t } = useTranslation(I18N.MODALS_NAMESPACE || "modal-titles");

  return (
    <Modal
      dark={dark}
      onClose={onClose}
      title={type ? t(type) : ""}
      hide={!isVisible}
    >
      {ModalContent}
    </Modal>
  );
};

export default AppModal;
