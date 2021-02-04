import React, { useState, useEffect } from 'react';
import { H1, FormGroup, InputGroup, Spinner } from '@blueprintjs/core';

import { CountryCard } from '../../components';
import { getAllCountries } from '../../services/api/country/country';

export default function CountryList() {
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const countires = await getAllCountries();
      setCountries(countires);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredCountries = countries.filter(({ name }) => !term || name.toLowerCase().includes(term));

  return (
    <div>
      <H1>Country list</H1>
      {loading && <Spinner />}
      {!loading && (
        <>
          <FormGroup label="Filter" labelFor="text-input">
            <InputGroup id="text-input" placeholder="Type here..." onChange={(e) => setTerm(e.target.value)} />
          </FormGroup>

          {filteredCountries.map((result) => (
            <CountryCard key={result.name} {...result} />
          ))}
        </>
      )}
    </div>
  );
}
