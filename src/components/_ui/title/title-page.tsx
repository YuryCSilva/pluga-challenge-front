import { cn } from '@/src/shared/utils/cn';
import { Title } from '.';

export type TitlePageProps = React.ComponentProps<'h1'>;

export function TitlePage({
  className,
  children,
  ...props
}: TitlePageProps) {
  return (
    <Title variant='h1' className={cn('text-center', className)} {...props}>
      {children}
    </Title>
  );
}
