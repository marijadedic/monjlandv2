import { useEffect, useMemo, useState } from 'react';

export function useOnScreen<T>(ref: React.RefObject<T>) {
	const [isIntersecting, setIntersecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) => {
				setIntersecting(entry.isIntersecting);
			}),
		[]
	);

	useEffect(() => {
		observer.observe(ref?.current as unknown as Element);

		return () => {
			observer.disconnect();
		};
	}, [observer, ref]);

	return isIntersecting;
}
