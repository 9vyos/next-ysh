import React from "react";
import { useQuery, gql } from "@apollo/client";

interface Country {
  code: string;
  emoji: string;
  name: string;
}

interface CountryData {
  countries: Country[];
}

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

export default function List() {
  const { data, loading, error } = useQuery<CountryData>(GET_COUNTRIES);

  if (loading) {
    return <h2>로딩중</h2>;
  }

  if (error) {
    return <h1>에러 발생</h1>;
  }

  const countries = data?.countries.slice(0, 4);
  console.log(countries);

  return (
    <div>
      <div className="mt-6 flow-root">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {countries.map((country, index) => (
            <li key={index} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* <img
                    className="h-8 w-8 rounded-full"
                    src={country.imageUrl}
                    alt=""
                  /> */}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {country.name}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {"@" + country.code}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          View all
        </a>
      </div>
    </div>
  );
}
