"use client";
import { useEffect } from "react";

// Error components must be Client components.
export default function Error({ error, reset }) {
  useEffect(() => {
    //Log the error to an reporting service.
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
