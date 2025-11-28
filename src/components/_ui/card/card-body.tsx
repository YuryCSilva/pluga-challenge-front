import { cn } from '@/src/shared/utils/cn';

export type CardBodyProps = React.ComponentProps<'div'>;

export default function CardBody({ className, ...props }: CardBodyProps) {
  return (
    <div
      className={cn(
        `card-body min-h-17 justify-center text-center`,
        className
      )}
      {...props}
    />
  );
}
