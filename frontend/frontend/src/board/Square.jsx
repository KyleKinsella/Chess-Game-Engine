import classNames from 'classnames';

function Square({ coords, isFree, piece, highlight }) {	
    const sqClass = classNames({
        'square': true,
        'coords': coords,
		'isFree': isFree,
        'highlight': highlight
    });
    
    //~ return [<div className={sqClass}>{piece}</div>, coords];
    return <div className={sqClass}>{piece}</div>
}

export default Square
