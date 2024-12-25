import { useState } from "react";
import { Header } from "./components/Header";
import { BeerCard } from "./components/BeerCard";
import { useBeers } from "./api/useBeers";

function App() {
  const [search, setSearch] = useState("");
  const { beers, loading, error } = useBeers();

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header searchValue={search} onSearchChange={setSearch} />

      <main className="container mx-auto px-4 pb-12">
        {loading ? (
          <div className="text-center">Loading beers...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            <p className="text-center mb-8 text-gray-400">
              Showing {filteredBeers.length} of {beers.length} beers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBeers.map((beer) => (
                <BeerCard key={beer.id} beer={beer} />
              ))}
            </div>
            {filteredBeers.length === 0 && (
              <div className="text-center text-gray-500 mt-12">
                No beers found matching your search.
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
