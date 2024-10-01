// src/components/Search.tsx
import React, { useState, ChangeEvent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface User {
  id: number;
  name: string;
}

const ProductSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: User[] = await response.json();
      setSuggestions(data.map((user) => user.name));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setIsOpen(false);
  };

  const toggleModal = () => {
    if (isOpen) {
      // Clear search term when closing the modal
      setSearchTerm("");
    }
    setIsOpen(!isOpen);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  // Filter suggestions only if searchTerm length is 3 or more
  const filteredSuggestions =
    searchTerm.length >= 3
      ? suggestions.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  // Close modal if clicked outside of it
  const handleOutsideClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isOpen && !target.closest(".modal-content")) {
      toggleModal();
    }
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto"
      onClick={handleOutsideClick}
    >
      {/* <button
        onClick={toggleModal}
        className="bg-blue-500 text-white rounded px-4 py-2 mb-4 focus:outline-none"
      >
        Open Search
      </button> */}
      <div className="flex justify-center border border-gray-300 rounded-lg overflow-hidden">
        <span className="flex items-center justify-center px-3 text-gray-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          onClick={toggleModal}
          type="text"
          placeholder="ค้นหาสินค้า..."
          className="flex-1 px-1 py-2 border-none outline-none focus:ring-0 text-base focus:outline-none"
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-2/3 max-w-3xl mx-auto relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500"
            >
              {/* &times; */}
            </button>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                className="border border-gray-300 rounded pl-10 pr-10 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M16.5 10.5A6.5 6.5 0 1110 4a6.5 6.5 0 016.5 6.5z"
                  />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            {isLoading ? (
              <div className="mt-4 flex justify-center items-center">
                <svg
                  className="animate-spin h-8 w-8 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              </div>
            ) : (
              filteredSuggestions.length > 0 && (
                <ul className="mt-4 max-h-60 overflow-y-auto border border-gray-300 rounded-lg shadow-lg">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="cursor-pointer p-2 hover:bg-gray-200"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
