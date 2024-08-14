import { useEffect, useState } from 'react';

export const useGroupStyles = (group: 'Akira' | 'LockBit' | 'REvil') => {
 const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');
 const [buttonColor, setButtonColor] = useState<string>('#FFFFFF');
 const [dotColor, setDotColor] = useState<string>('#0072bc');
 const [responseColorHacKer, setresponseColorHacKer] = useState<string>('#12663d');
 const [responseColor, setResponseColor] = useState<string>('#000');

 useEffect(() => {
    switch (group) {
      case "LockBit":
        setBackgroundColor('#7b1c1e');
        setButtonColor('#D90000');
        setDotColor('#f3c3c3');
        setResponseColor('#D90000');
        setresponseColorHacKer('#a72a2a');
        break;
      case "Akira":
        setBackgroundColor('#c0eee1');
        setButtonColor('#12663d');
        setDotColor('#12663d');
        setResponseColor('#03bb66');
        setresponseColorHacKer('#12663d');
        break;
      case "REvil":
        setBackgroundColor('#334987');
        setButtonColor('#0072bc');
        setDotColor('#d0daf8'); 
        setResponseColor('#0072bc');
        setresponseColorHacKer('#4169e1');
        break;
      default:
        setBackgroundColor('#FFFFFF');
        setButtonColor('#FFFFFF');
        setDotColor('#0072bc');
        setResponseColor('#000');
        setresponseColorHacKer('#12663d');
    }
 }, [group]);

 return { backgroundColor, buttonColor, responseColor, responseColorHacKer, dotColor };
};
