import { cn } from '@/src/shared/utils/cn';

export type CardImageContainerProps = React.ComponentProps<'figure'>;

export default function CardImageContainer({
  className,
  ...props
}: CardImageContainerProps) {
  return <figure className={cn('p-6', className)} {...props} />;
}
