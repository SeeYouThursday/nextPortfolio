'use client';
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button type={'reset'} onClick={reset}>
        Try Again
      </button>
    </div>
  );
}
