import React from 'react';
import './Palette.css';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const PaletteItem: React.FunctionComponent<{ color: string, active: boolean, onClick: () => void }> = ({
                                                                                                           color,
                                                                                                           active,
                                                                                                           onClick
                                                                                                       }) => {
    return (
        <div
            className={`PaletteItem ${active ? 'active' : ''}`}
            style={{backgroundColor: color}}
            onClick={onClick}
        />
    );
};

const Palette: React.FunctionComponent<{ selected: string, onSelect: (color: string) => void }> = ({
                                                                                                       selected,
                                                                                                       onSelect
                                                                                                   }) => {
    return (
        <div className="Palette">
            <h2>색깔 고르기</h2>
            <div className="colors">
                {colors.map(color => (
                    <PaletteItem
                        color={color}
                        key={color}
                        active={selected === color}
                        onClick={() => onSelect(color)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Palette;