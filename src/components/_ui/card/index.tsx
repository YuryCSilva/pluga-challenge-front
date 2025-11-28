import { cn } from '@/src/shared/utils/cn';

export type CardProps = React.ComponentProps<'button'>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <button
      type='button'
      className={cn(
        `group card cursor-pointer bg-base-100 shadow-sm transition card-sm
        hover:shadow-lg`,
        className
      )}
      {...props}
    />
  );
}
