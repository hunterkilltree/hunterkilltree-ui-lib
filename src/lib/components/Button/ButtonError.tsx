import { ButtonProps } from "./ButtonType";

export function ButtonError({ title, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
        ${
          disabled
            ? "bg-red-400 cursor-not-allowed"
            : "bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        }`}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
