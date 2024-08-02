"use client";

import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import Exhibitors from "../Components/Exhibitors";
import { getExhibitors } from "/lib/api";

const ExhibitorsPage = () => {
  const [exhibitors, setExhibitors] = useState([]);
  const [filteredExhibitors, setFilteredExhibitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExhibitorsData = async () => {
      const exhibitors = await getExhibitors();
      setExhibitors(exhibitors);
      setFilteredExhibitors(exhibitors);
      setLoading(false);
    };
    getExhibitorsData();
  }, []);

  const onChange = (e) => {
    const text = e.target.value.toLowerCase();
    const filteredExhibitors = exhibitors.filter((exhibitor) => {
      return exhibitor.name.toLowerCase().includes(text);
    });
    setFilteredExhibitors(filteredExhibitors);
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 md:max-w-96 flex justify-center">
        <div className="w-full md:w-[80%]">
          <SearchBar onChange={onChange} />
        </div>
      </div>
      <div className="w-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Exhibitors exhibitors={filteredExhibitors} />
        )}
      </div>
    </div>
  );
};

export default ExhibitorsPage;
