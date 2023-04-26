import type { HandleModalType } from './provider.types';

export * from './modal.types';
export * from './provider.types';
export * from './context.types';

import InternalModal from './modal';
import ModalProvider, { ref } from './provider';
import context from './context';

const Modal = InternalModal as typeof InternalModal & {
  Provider: typeof ModalProvider;
  context: typeof context;
  modal: HandleModalType;
};

Modal.Provider = ModalProvider;
Modal.context = context;
Modal.modal = function modal(options) {
  ref.current?.modal(options);
};

export default Modal;
