{
  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined (보통 많이 사용) (있거나, 없거나)
  let name: number | undefined;
  name = undefined;
  name = 1;

  // null
  let person: null;
  let person2: string | null;

  // 함수의 return type도 정할 수 있구나
  function find(): number | undefined {
    return undefined;
  }
}
