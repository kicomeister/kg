import React, { useState, useEffect } from 'react';
import { H1, FormGroup, InputGroup, Spinner, NonIdealState } from '@blueprintjs/core';
import { useDebounce } from 'use-debounce';

import { CountryCard } from '../../components';
import { getCountryies, getCountry } from '../../services/api/country/country';

export default function Country() {
  const [country, setCountry] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm] = useDebounce(country, 1000);

  useEffect(() => {
    async function fetchData() {
      if (!searchTerm) {
        return;
      }

      setLoading(true);

      const termArray = searchTerm.split(',').filter(Boolean);
      const canUseCountries = searchTerm.includes(',');

      const fn = canUseCountries ? getCountryies : getCountry;

      const response = await fn(canUseCountries ? termArray : searchTerm);
      setResults(response);
      setLoading(false);
    }
    fetchData();
  }, [searchTerm]);

  const areCardsVisible = !!results.length;

  return (
    <div>
      <H1>Country finder</H1>
      <FormGroup label="County/Counties" labelFor="text-input" labelInfo="(separator: ',')">
        <InputGroup id="text-input" placeholder="Hungary, Estonia, ..." onChange={(e) => setCountry(e.target.value)} />
      </FormGroup>

      {loading && <Spinner />}
      {!loading && (
        <>
          {areCardsVisible && results.map((result) => <CountryCard key={result.name} {...result} />)}
          {!areCardsVisible && searchTerm && (
            <NonIdealState
              icon="search"
              title="No search result"
              description="Your search didn't match any country.
Try searching for something else."
            />
          )}
        </>
      )}
    </div>
  );
}
