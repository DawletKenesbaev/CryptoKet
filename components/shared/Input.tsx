import React from "react";

interface InputProps {
    inputType: "text" | "number" | "textarea";
    title: string;
    placeholder: string;
    handleClick: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
  
  const Input: React.FC<InputProps> = ({ inputType, title, placeholder, handleClick }) => {
    // ... rest of the component JSX with type annotations added
  
    return (
      <div className="mt-10 w-full">
        <p className="font-poppins text-xl font-semibold text-nft-black-1 dark:text-white">
          {title}
        </p>
        {inputType === "number" ? (
          <div className="flexBetween mt-4 w-full flex-row rounded-lg border border-nft-gray-2 bg-white px-4 py-3 font-poppins text-base text-nft-gray-2 outline-none dark:border-nft-black-1 dark:bg-nft-black-1 dark:text-white">
            <input
              type="number"
              className="flex w-full bg-white outline-none dark:bg-nft-black-1"
            />
            <p className="font-poppins text-xl font-semibold text-nft-black-1 dark:text-white">
              ETH
            </p>
          </div>
        ) : inputType === "textarea" ? (
          <textarea
            rows={10}
            className="mt-4 w-full rounded-lg border border-nft-gray-2 bg-white px-4 py-3 font-poppins text-base text-nft-gray-2 outline-none dark:border-nft-black-1 dark:bg-nft-black-1 dark:text-white"
            placeholder={placeholder}
            onChange={handleClick}
          />
        ) : (
          <input
            className="mt-4 w-full rounded-lg border border-nft-gray-2 bg-white px-4 py-3 font-poppins text-base text-nft-gray-2 outline-none dark:border-nft-black-1 dark:bg-nft-black-1 dark:text-white"
            placeholder={placeholder}
            onChange={handleClick}
          />
        )}
      </div>
    );
  };
  
  export default Input;
  