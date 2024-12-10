"use client";
// import { AppDispatch, RootState } from "~/state/store";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   // decrement,
//   incrementAsync,
//   incrementByAmount,
// } from "~/state/counter/counterSlice";
// import { Button } from "~/components/ui/button";

// export default function Home() {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch<AppDispatch>();
//   return (
//     <div>
//       <h2>{count}</h2>
//       <Button onClick={() => dispatch(incrementByAmount({ value: 10 }))}>
//         +
//       </Button>
//       <Button onClick={() => dispatch(incrementAsync({ value: 5 }))}>-</Button>
//     </div>
//   );
// }
//
//
import { signOut } from "~/auth";
import { Button } from "~/components/ui/button";

const Protected = () => {
  return (
    <form className="h-screen w-screen flex flex-col justify-center items-center gap-10">
      <div></div>
      <Button
        type="button"
        onClick={async () => await signOut()}
        className="w-40"
        variant="secondary"
      >
        logout
      </Button>
    </form>
  );
};

export default Protected;
