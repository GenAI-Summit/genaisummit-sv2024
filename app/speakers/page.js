"use client";

import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import Speakers from "../Components/Speakers";
import { getSpeakers } from "/lib/api";

const SpeakersPage = () => {
  const [speakers, setSpeakers] = useState([]);
  const [filteredSpeakers, setFilteredSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSpeakersFromApi = async () => {
      const speakers = await getSpeakers();
      setSpeakers(speakers);
      setFilteredSpeakers(speakers);
      setLoading(false);
    };
    getSpeakersFromApi();
  }, []);

  const onChange = (e) => {
    const text = e.target.value;
    const lowerCaseText = text.toLowerCase();
    const filteredSpeakers = speakers.filter((speaker) => {
      return (
        speaker.name.toLowerCase().includes(lowerCaseText) ||
        speaker.company.toLowerCase().includes(lowerCaseText)
      );
    });
    setFilteredSpeakers(filteredSpeakers);
  };
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/5">
        <SearchBar onChange={onChange} />
      </div>
      <div className="w-full">
        {loading ? <p>Loading...</p> : <Speakers speakers={filteredSpeakers} />}
      </div>
    </div>
  );
};

export default SpeakersPage;
