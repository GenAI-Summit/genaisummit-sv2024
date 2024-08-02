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
    const getSpeakersData = async () => {
      const speakers = await getSpeakers();
      setSpeakers(speakers);
      setFilteredSpeakers(speakers);
      setLoading(false);
    };
    getSpeakersData();
  }, []);

  const onChange = (e) => {
    const text = e.target.value.toLowerCase();
    const filteredSpeakers = speakers.filter((speaker) => {
      return (
        speaker.name.toLowerCase().includes(text) ||
        speaker.organization.toLowerCase().includes(text) ||
        speaker.title.toLowerCase().includes(text)
      );
    });
    setFilteredSpeakers(filteredSpeakers);
  };
  return (
    <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-4">
      <div className="w-full md:w-2/5 flex justify-center md:max-w-96">
        <div className="w-full md:w-[80%]">
          <SearchBar onChange={onChange} />
        </div>
      </div>
      <div className="w-full">
        {loading ? <p>Loading...</p> : <Speakers speakers={filteredSpeakers} />}
      </div>
    </div>
  );
};

export default SpeakersPage;
