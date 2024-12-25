import { useState, useEffect } from "react";
import { Beer } from "../type/Beer";

export function useBeers() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((res) => res.json())
      .then((data) => {
        setBeers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load beers. Please try again later.");
        setLoading(false);
      });
  }, []);

  return { beers, loading, error };
}
