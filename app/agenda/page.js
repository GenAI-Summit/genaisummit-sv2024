"use client";

import { useState, useMemo } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";
import ResetBtn from "../Components/Button/ResetBtn";
import Agenda from "../Components/Agenda";
import useSessions from "../Hooks/useSessions";
import useSessionsIndex from "../Hooks/useSessionsIndex";
import useDates from "../Hooks/useDates";
import SectionEnter from "../Motions/SectionEnter";
import { PTtoUTC, formatToPTDate } from "@/lib/time";

const AgendaPage = () => {
  const [text, setText] = useState("");
  const textLower = text.toLowerCase();
  const { sessions, isLoading, isError } = useSessions();

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const {
    tags,
    tracks,
    locations,
    isLoading: isLoadingIndex,
    isError: isErrorIndex,
  } = useSessionsIndex();
  const {
    dates,
    daysMap,
    isLoading: isLoadingDates,
    isError: isErrorDates,
  } = useDates();

  const onReset = () => {
    setText("");
    setSelectedTags([]);
    setSelectedTracks([]);
    setSelectedLocations([]);
    setSelectedDates([]);
  };

  const onSelectedTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const onSelectedTrack = (track) => {
    if (selectedTracks.includes(track)) {
      setSelectedTracks(selectedTracks.filter((t) => t !== track));
    } else {
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  const onSelectedLocation = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((l) => l !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const onSelectedDate = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const filteredSessions = useMemo(() => {
    return sessions?.filter((session) => {
      return (
        (session.name.toLowerCase().includes(textLower) ||
          session.speakers.some(
            (speaker) =>
              speaker.name.toLowerCase().includes(textLower) ||
              speaker.organization.toLowerCase().includes(textLower),
          ) ||
          session.moderators.some(
            (moderator) =>
              moderator.name.toLowerCase().includes(textLower) ||
              moderator.organization.toLowerCase().includes(textLower),
          )) &&
        (selectedTags.length === 0 || selectedTags.includes(session.tag)) &&
        (selectedTracks.length === 0 ||
          session.tracks.some((track) =>
            selectedTracks.includes(track.name),
          )) &&
        (selectedLocations.length === 0 ||
          selectedLocations.includes(session.location)) &&
        (selectedDates.length === 0 ||
          selectedDates.includes(formatToPTDate(PTtoUTC(session.start))))
      );
    });
  }, [
    sessions,
    textLower,
    selectedTags,
    selectedTracks,
    selectedLocations,
    selectedDates,
  ]);

  const sessionsByDate = useMemo(() => {
    return filteredSessions?.reduce((acc, session) => {
      const date = formatToPTDate(PTtoUTC(session.start));
      acc[date] = acc[date] || [];
      acc[date].push(session);
      return acc;
    }, {});
  }, [filteredSessions]);

  if (isLoading || isLoadingIndex || isLoadingDates) {
    return <Loader />;
  }

  if (isError || isErrorIndex || isErrorDates) {
    return <Error />;
  }

  return (
    <SectionEnter>
      <div className="mt-10 w-full flex flex-col lg:flex-row gap-y-10 lg:gap-x-8">
        <div className="w-full lg:w-2/5 lg:max-w-96 flex justify-center">
          <div className="w-full flex flex-col gap-y-8 md:gap-y-10">
            <SearchBar text={text} setText={setText} />
            {dates && (
              <Filter
                name="Dates"
                options={dates}
                selected={selectedDates}
                onSelect={onSelectedDate}
              />
            )}
            {tags && (
              <Filter
                name="Tags"
                options={tags}
                selected={selectedTags}
                onSelect={onSelectedTag}
              />
            )}
            {tracks && (
              <Filter
                name="Tracks"
                options={tracks}
                selected={selectedTracks}
                onSelect={onSelectedTrack}
              />
            )}
            {locations && (
              <Filter
                name="Locations"
                options={locations}
                selected={selectedLocations}
                onSelect={onSelectedLocation}
              />
            )}
            <ResetBtn onReset={onReset} />
          </div>
        </div>
        <div className="w-full">
          <Agenda sessionsByDate={sessionsByDate} daysMap={daysMap} />
        </div>
      </div>
    </SectionEnter>
  );
};

export default AgendaPage;
