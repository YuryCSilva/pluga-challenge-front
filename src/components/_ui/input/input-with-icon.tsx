import { cn } from '@/src/shared/utils/cn';
import { InputProps, Input } from '.';

export type InputWithIconProps = InputProps & {
  Icon: React.ElementType;
};

export function InputWithIcon({
  className,
  Icon,
  ...props
}: InputWithIconProps) {
  return (
    <label className='input w-full'>
      <Icon />
      <Input className={cn('', className)} {...props} />
    </label>
  );
}
