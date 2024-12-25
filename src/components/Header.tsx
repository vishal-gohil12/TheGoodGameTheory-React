import { SearchBar } from "./SearchBar";

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function Header({ searchValue, onSearchChange }: HeaderProps) {
  return (
    <header className="bg-gray-900 py-6 mb-8 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <svg
            className="w-8 h-8 text-amber-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-3-3H7L4 7m16 0v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0h-2M4 7h2"
            />
          </svg>
          <h1 className="text-3xl font-bold text-amber-500">Ale Catalog</h1>
        </div>
        <SearchBar value={searchValue} onChange={onSearchChange} />
      </div>
    </header>
  );
}
