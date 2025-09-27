"use client";

import React, { useMemo, useState } from "react";

export interface ProgressStepsProps {
  steps?: string[]; // labels for steps; defaults to 5 generic steps
  initialStep?: number; // 1-indexed
  className?: string;
  onChangeStep?: (currentStep: number) => void; // 1-indexed
}

export default function ProgressSteps({
  steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
  initialStep = 1,
  className = "",
  onChangeStep,
}: ProgressStepsProps) {
  const [current, setCurrent] = useState<number>(
    Math.min(Math.max(initialStep, 1), steps.length)
  );

  const percent = useMemo(() => {
    if (steps.length <= 1) return 100;
    return ((current - 1) / (steps.length - 1)) * 100;
  }, [current, steps.length]);

  const goNext = () => {
    setCurrent((prev) => {
      const next = Math.min(prev + 1, steps.length);
      if (next !== prev) onChangeStep?.(next);
      return next;
    });
  };

  const goPrev = () => {
    setCurrent((prev) => {
      const next = Math.max(prev - 1, 1);
      if (next !== prev) onChangeStep?.(next);
      return next;
    });
  };

  const reset = () => {
    setCurrent(1);
    onChangeStep?.(1);
  };

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Progress</h2>
        <div className="text-sm text-gray-500">{current} / {steps.length}</div>
      </div>

      {/* Track */}
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute left-0 top-0 h-2 bg-blue-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
          aria-hidden
        />
        {/* Circles */}
        <div className="absolute inset-0 flex items-center justify-between">
          {steps.map((label, idx) => {
            const stepIndex = idx + 1; // 1-indexed
            const active = stepIndex <= current;
            return (
              <div key={label + idx} className="relative flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                    active ? "bg-blue-500 border-blue-500 text-white" : "bg-white border-gray-300 text-gray-500"
                  }`}
                  aria-current={active ? "step" : undefined}
                >
                  {stepIndex}
                </div>
                <span className="absolute top-10 text-xs text-gray-600 whitespace-nowrap">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-10 flex gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={current === 1}
          className="px-4 py-2 rounded-md border text-sm disabled:opacity-50"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={current === steps.length}
          className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm disabled:opacity-50"
        >
          Next
        </button>
        <button
          type="button"
          onClick={reset}
          className="ml-auto px-4 py-2 rounded-md border text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
