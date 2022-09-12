import React, { memo } from 'react';

import Img, { ImageProps } from 'next/future/image';

const Image = ({
	src = 'undefined',
	alt = 'undefined',
	...props
}: ImageProps): JSX.Element => {
	const [source, setSource] = React.useState(src);

	const handleErrorImages = React.useCallback(() => {
		setSource('https://via.placeholder.com/323x170.png');
	}, []);

	return (
		<Img
			{...props}
			src={source}
			alt={alt}
			onError={handleErrorImages}
		/>
	);
};

const MemorizedImage = memo(Image);

export default MemorizedImage;
