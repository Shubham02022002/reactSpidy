import React from "react";
const JsxExpression = (): JSX.Element => {
  //   let [isLoggedIn, setIsLoggedIn] = useState("Login");

  let arr: number[] = [10, 20, 40, 50];
  const fun = (arr: number[]): number[] => {
    const newArr: number[] = arr.map((val): number => {
      return val = val - 1;
    });
    return newArr;
  }

  const ans: number[] = fun(arr);
  console.log(ans);
  let count = 10;
  return (
    <div>
      {/* <button
        onClick={() => {
          isLoggedIn == "Login"
            ? setIsLoggedIn("Logout")
            : setIsLoggedIn("Login");
        }}
      >
        click me to {isLoggedIn}
      </button> */}
      {/* {arr.map((val, index) => {
        return <h1 key={index}>{val}</h1>;
      })} */}
      coutner is {count}
      <br />
      <button
        className="border-[1px] border-white"
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        inc
      </button>
    </div>
  );
};

export default JsxExpression;
