"use client";

import useModal from "@/hooks/use-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalWrapperProps extends React.ComponentPropsWithoutRef<"div"> {}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, ...props }) => {
  const { isOpen, onClose, params } = useModal();
  return (
    <Dialog {...props} open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" overflow-hidden">
        <svg
          width="420"
          height="314"
          viewBox="0 0 420 314"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 -top-2 -right-4"
        >
          <path
            d="M414.605 105.521C367.644 47.4704 220.343 -29.3335 141.035 23.086C42.3762 88.2955 217.46 374.573 320.245 294.222C407.407 226.084 94.3449 27.2922 5.52284 86"
            stroke="#F6F6F6"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
        <DialogHeader>
          <DialogTitle className="text-3xl lg:text-4xl">
            {params.title || "Есть вопрос?"}
          </DialogTitle>
          <DialogDescription className="mt-2">
            {params.description ||
              "Заполните форму обратной связи. И наши менеджеры свяжутся с вами в ближайшее время. И ответят на все интересующие вопросы. Спасибо за обращение."}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
