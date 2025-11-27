import { cn } from '@/src/shared/utils/cn';

export type InputProps = React.ComponentProps<'input'>;

export function Input({ className, ...props }: InputProps) {
  return <input className={cn('', className)} {...props} />;
}
