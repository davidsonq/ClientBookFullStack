export interface iContactCreate {
  name: string;
  email: string;
  secondEmail?: string | null;
  secondPhone?: string | null;
  phone: string;
  [key: string]: any;
}

export interface iUseModal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface iUseModalProps {
  modal1: iUseModal;
}
