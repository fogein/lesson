import React, { FC, ReactNode, useRef, MouseEvent, useEffect, RefObject } from 'react'
import cn from 'classnames'
import useOnClickOutside from '../../hooks/useOutsideClick';

export type ModalVariant =
  | 'medium';

type ModalProps = {
  show: boolean;
  onClose?: () => void;
  label?: string | ReactNode;
  variant?: 'medium';
  children: ReactNode;
  onSuccess?: (event: MouseEvent<HTMLButtonElement>, handlerClose: () => void) => void;
  onRemove?: () => void;
  withoutFooter?: boolean;
  withoutLabel?: boolean;
  isAutoClosable?: boolean;
  customLayer?: number;
};

export const Modal: FC<ModalProps> = (props) => {
  const {
    show,
    onClose,
    children,
    label,
    variant = 'medium',
    onRemove,
    onSuccess,
    withoutFooter = false,
    withoutLabel = false,
    isAutoClosable = true,
    customLayer,
  } = props;
  const modalRef = useRef<HTMLDivElement>(null);
  const variantSizes: Record<ModalVariant, string> = {
    medium: 'max-w-[879px]',
  };
  const easyModalClassName = ({ show }: { show: boolean }) =>
    cn(
      show ? 'visible' : 'invisible',
      'fixed',
      'ease-in-out',
      'duration-180',
      'z-10',
      'w-screen',
      'h-screen',
      'inset-0',
      'inline-flex',
      'items-center',
      'justify-center',
      'bg-gray-600',
      'bg-opacity-[0.62]',
      'px-[10px]',
    );
  const modalFooterClassName = cn(
    'h-[92px]',
    'px-[40px]',
    'py-[40px]',
    'border-t',
    'border-[#000]',
    'w-full',
    'inline-flex',
    'items-center',
    'justify-between',
  );

  function handlerClose() {
    onClose?.();
  }
  function handlerRemove() {
    onRemove?.();
    handlerClose();
  }

  function handlerSuccess(event: MouseEvent<HTMLButtonElement>) {
    onSuccess?.(event, handlerClose);
    isAutoClosable && handlerClose();
  }

  const renderModalFooter = !withoutFooter ? (
    <div className={modalFooterClassName}>
      <div className="inline-flex items-center gap-[18px]">
        {onSuccess && (
          <button onClick={(event) => handlerSuccess(event)}></button>
        )}
        {onClose && (
          <button onClick={handlerClose}>Close</button>
        )}
      </div>
      <div>
        {onRemove && (
          <button onClick={handlerRemove}></button>
        )}
      </div>
    </div>
  ) : (
    <></>
  );

  useOnClickOutside(modalRef, () => onClose?.())
  return (
    <div
      className={easyModalClassName({ show })}
    >
      <div
        ref={modalRef}
        className={cn(
          'w-full',
          'ease-in-out',
          'duration-150',
          'relative',
          'inline-flex',
          'flex-col',
          'max-h-[calc(100%-100px)]',
          show ? 'scale-10 visible' : 'scale-0 invisible',
          'z-50',
          'bg-[#fff]',
          'rounded-[32px]',
          'min-h-[150px]',
          variantSizes[variant],
        )}
      >
        {!withoutLabel && (
          <div className="inline-flex w-full mt-[16px] justify-between">
            <div className="w-full">
              {label && (
                <div className="text-[#000] px-[42px] mt-[24px] text-[24px] font-[700]">
                  {label}
                </div>
              )}
            </div>
            <div
              className="relative top-[0px] right-[15px]"
              onClick={onClose?.bind(null)}
            >X</div>
          </div>
        )}
        <div
          className={cn(
            'h-fit max-h-[calc(100%-200px)] w-full inline-flex'
          )}
        >
          <div className={`w-full h-full`}>
            {children}
          </div>
        </div>
        {renderModalFooter}
      </div>
    </div>
  )
}
