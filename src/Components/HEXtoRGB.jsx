import {useState} from 'react';

export default function HEXtoRGB() {
  const [currentColor, setCurrentColor] = useState('rgb(52, 73, 94)')

  const converter = (colorCipher) => {
    const bigint = parseInt(colorCipher.split('#')[1], 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  const changleHandler = (event) => {
    let colorCipher = event.target.value 
    if (colorCipher.length === 7) {
      /#[a-f\0-9]/.test(colorCipher) ? setCurrentColor(converter(colorCipher)) : setCurrentColor('Ошибка!')
    }
  }

  return (
    <div className="converter" style={{backgroundColor: currentColor}}>
      <div className="container">
        <input className="input" type="text" onChange={changleHandler}/>
        <div className="result">{currentColor}</div>
      </div>
    </div>
  );
}

