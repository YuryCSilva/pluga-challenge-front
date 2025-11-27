import { cn } from '@/src/shared/utils/cn';
import { ReactNode, Ref } from 'react';

export type DialogProps = Omit<React.ComponentProps<'dialog'>, 'children'> & {
  ref: Ref<HTMLDialogElement> | undefined;
  children: ReactNode;
};

export function Dialog({ className, ref, children, ...props }: DialogProps) {
  return (
    <dialog className={cn('modal', className)} ref={ref} {...props}>
      <div className='modal-box flex flex-col gap-6'>{children}</div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
