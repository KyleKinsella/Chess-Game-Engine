import classNames from 'classnames'

function Square({ coords, isFree, piece, highlight }) {
    const sqClass = classNames({
        'square': true,
        'is_white': (coords[0] + coords[1]) % 2 === 0,
        'isFree': isFree,
        'highlight': highlight
    });

    sqClass.concat(piece);

    return <div className={sqClass}>This is a Div</div>;
}

export default Square
