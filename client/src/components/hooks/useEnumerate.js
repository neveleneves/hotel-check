import { useEffect, useState } from "react";

export const useEnumerate = (num, variants, initText) => {
  const [label, setLabel] = useState(initText);

  useEffect(() => {
    const enumerate = (num, txt) => {
      const cases = [2, 0, 1, 1, 1, 2];
      return txt[
        num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
      ];
    };
    setLabel(enumerate(num, variants));
  }, [num, variants]);

  return {
    label,
  };
};
