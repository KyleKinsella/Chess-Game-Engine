import classNames from 'classnames'
import React, { useState } from 'react';

export default function Square({ coords, isFree, piece, highlight }) {
    var pName = "bk";
    const sqClass = classNames({
        'is_white': (coords[0] + coords[1]) % 2 === 0,
        pName,
        'isFree': isFree,
        'highlight': highlight
    });

    return <div className={sqClass}></div>;
}

export default Square

import React, { useState } from 'react';

export default function Button (props) {
	const [isPressed, setIsPressed] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	let btnClass = 'btn';
	if (isPressed) btnClass += ' btn-pressed';
	else if (isHovered) btnClass += ' btn-over';

	return (
		<button
			className={btnClass}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{props.label}
		</button>
	);
}