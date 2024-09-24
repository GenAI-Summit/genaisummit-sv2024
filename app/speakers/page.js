"use client";

import { useState, useMemo } from "react";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import SearchBar from "@/components/SearchBar";
import Speakers from "@/components/Speakers";
import ResetBtn from "@/components/Button/ResetBtn";
import useSpeakers from "@/hooks/useSpeakers";
import SpeakersIntro from "@/components/Intro/SpeakersIntro";
import SectionEnter from "@/motions/SectionEnter";

const SpeakersPage = () => {
  const { speakers, isLoading, isError } = useSpeakers();
  const [text, setText] = useState("");

  const filteredSpeakers = useMemo(() => {
    return speakers?.filter((speaker) => {
      const lowerCaseText = text.toLowerCase();
      return (
        speaker.name.toLowerCase().includes(lowerCaseText) ||
        speaker.organization.toLowerCase().includes(lowerCaseText) ||
        speaker.title.toLowerCase().includes(lowerCaseText)
      );
    });
  }, [speakers, text]);

  const onReset = () => {
    setText("");
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-full flex flex-col gap-y-14 mt-10">
      <SectionEnter>
        <SpeakersIntro />
      </SectionEnter>
      <SectionEnter>
        <div className="w-full flex flex-col gap-y-16 lg:gap-x-8">
          <div className="md:hidden w-full flex gap-x-4">
            <SearchBar text={text} setText={setText} />
            <ResetBtn onReset={onReset} width="w-32" />
          </div>
          <div className="w-full">
            <Speakers
              speakers={filteredSpeakers}
              widget={
                <div className="flex gap-x-4">
                  <SearchBar text={text} setText={setText} />
                  <ResetBtn onReset={onReset} width="w-32" />
                </div>
              }
            />
          </div>
        </div>
      </SectionEnter>
    </div>
  );
};

export default SpeakersPage;
