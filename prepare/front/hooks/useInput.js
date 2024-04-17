import { useState, useCallback } from "react";

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  //컴포넌트에 props로 넘기는 함수는 useCallback 안에 넣어줘야 최적화 가능
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
