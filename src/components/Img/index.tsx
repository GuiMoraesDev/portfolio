import React, { ImgHTMLAttributes, memo } from 'react';

interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
}

const Image = ({
  src = 'undefined',
  alt = 'undefined',
  ...props
}: IImageProps): JSX.Element => {
  const [source, setSource] = React.useState(src);

  const handleErrorImages = React.useCallback(() => {
    setSource("https://via.placeholder.com/323x170.png");
  }, []);

  return (
    <img
      {...props}
      src={source}
      alt={alt}
      onError={handleErrorImages}
      loading="lazy"
    />
  );
};

const MemorizedImage = memo(Image);

export default MemorizedImage;
