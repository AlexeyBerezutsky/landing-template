import {useState} from 'react';

export function Switch({children, left, right, onChange}) {
    const [side, setSide] = useState(left);

    const handleSide = (side) => {
        setSide(side);
        onChange(side);
    };

    return (
        <div className="switch-form">
            <div className="switch-form__field">
                <div className="switch-form__back" style={{left: side === left ? 0 : '50%'}} />
                <button
                    className={`switch-form__button ${side === left ? 'switch-form__button--active' : ''}`}
                    onClick={() => handleSide(left)}
                >
                    {left}
                </button>

                <button
                    className={`switch-form__button ${side === right ? 'switch-form__button--active' : ''}`}
                    onClick={() => handleSide(right)}
                >
                    {right}
                </button>
            </div>
            {children}
        </div>
    );
}
