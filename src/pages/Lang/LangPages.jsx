import { useState } from "react";
import dictionaryData from "../../Data";
import { Link } from "react-router-dom";

function LangPages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [language, setLanguage] = useState("sasak-to-indonesia");
  console.log(language);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const results = dictionaryData.filter((entry) => {
      if (language === "sasak-to-indonesia") {
        return entry.sasak.toLowerCase().includes(e.target.value.toLowerCase());
      } else {
        return entry.indonesia
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
    });
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Kamus Sasak - Indonesia</h2>
      <div className="flex space-x-2 mb-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded-md bg-white shadow-md"
        >
          <option value="sasak-to-indonesia">Sasak ke Indonesia</option>
          <option value="indonesia-to-sasak">Indonesia ke Sasak</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Cari kata..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-3 border rounded-md w-full max-w-lg shadow-md"
      />
      <ul className="mt-4 w-full max-w-lg bg-white shadow-md rounded-md">
        {searchResults.length > 0 && searchTerm.length > 0 ? (
          searchResults.map((entry, index) => (
            <li
              key={index}
              className="p-3 border-b last:border-none flex justify-between"
            >
              {/* <span className="font-semibold">
                {language === "sasak-to-indonesia"
                  ? entry.sasak
                  : entry.indonesia}
              </span> */}
              <span>
                {language === "sasak-to-indonesia"
                  ? entry.indonesia
                  : entry.sasak}
              </span>
            </li>
          ))
        ) : searchTerm.length === 0 ? (
          <li className="p-3 text-gray-500">Masukkan kata</li>
        ) : (
          <li className="p-3 text-gray-500">Tidak ada di kamus</li>
        )}
      </ul>
      <p className="pt-5">
        Menambah kosakata dan revisi,
        <Link
          to="https://docs.google.com/forms/d/e/1FAIpQLSdG1KUdfk95wO7maka3Yh1NtPu1KWjFo0qKNDzWU3On7_nK5g/viewform?usp=header"
          className="underline text-blue-500 cursor-pointer mx-2 font-semibold"
          target="blank"
        >
          Klick
        </Link>
      </p>
    </div>
  );
}

export default LangPages;
