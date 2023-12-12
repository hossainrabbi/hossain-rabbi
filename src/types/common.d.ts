export interface ModalType {
  open: boolean;
  data?: any;
  type?: "ADD" | "UPDATE" | "VIEW" | null;
}

export interface FromModalProps {
  open: ModalType;
  toggle: (vale?: boolean) => void;
  reRender: (val?: boolean) => void;
  api: NotificationInstance;
  title: string;
}

export interface ModalProps {
  title: string;
  open: ModalType;
  toggle: (vale?: boolean) => void;
  reRender?: (val?: boolean) => void;
}

export interface RouteType {
  path: string;
  element: React.LazyExoticComponent | React.FC<React.LazyExoticComponent>;
}
