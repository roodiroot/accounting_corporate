"use client";

import useModal from "@/hooks/use-modal";

interface ButtonOpenModalProps extends React.HTMLAttributes<HTMLSpanElement> {
  title?: string;
  description?: string;
}

const ButtonOpenModal: React.FC<ButtonOpenModalProps> = ({
  title = "",
  description = "",
  children,
  ...props
}) => {
  const { onOpen } = useModal();
  return (
    <span {...props} onClick={() => onOpen({ title, description })}>
      {children}
    </span>
  );
};

export default ButtonOpenModal;
