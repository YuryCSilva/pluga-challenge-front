import { cn } from '@/src/shared/utils/cn';
import Image, { ImageProps } from 'next/image';

export type CardImageProps = ImageProps;

export default function CardImage({
  className,
  alt,
  ...props
}: CardImageProps) {
  return (
    <Image
      alt={alt}
      data-loaded='false'
      onLoad={(event) => {
        event.currentTarget.setAttribute('data-loaded', 'true');
      }}
      className={cn(
        `transition group-hover:scale-110 data-[loaded=false]:animate-pulse
        data-[loaded=false]:bg-gray-100/10`,
        className
      )}
      {...props}
    />
  );
}
