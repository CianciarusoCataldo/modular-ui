import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import MODALS from "app/modals";

import {
  closeModal,
  driveWithDarkMode,
  geti18nConfig,
  getModalType,
  isModalVisible,
} from "@cianciarusocataldo/modular-engine";

import { Modal } from "modular-ui-preview";

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

  const { t } = useTranslation(I18N.MODALS_NAMESPACE);

  const ModalComponent = driveWithDarkMode(Modal);

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
