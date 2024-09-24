"use client";

import { useState, useMemo } from "react";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
// import Sponsors from "../Components/Sponsors";
import Media from "@/components/Media";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import ResetBtn from "@/components/Button/ResetBtn";
// import useExhibitors from "../Hooks/useExhibitors";
import useMedia from "@/hooks/useMedia";
import useExhibitorsIndex from "@/hooks/useExhibitorsIndex";
import PartnersIntro from "@/components/Intro/PartnersIntro";
import SectionEnter from "@/motions/SectionEnter";

const PartnersPage = () => {
  //const { sponsors, media, sponsorTiers, isLoading, isError } = useExhibitors();
  const { media, isLoading, isError } = useMedia();
  const [text, setText] = useState("");
  const textLower = text.toLowerCase();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const { categories } = useExhibitorsIndex();

  const onSelectCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const onReset = () => {
    setSelectedCategories([]);
    setText("");
  };

  /*
  const filteredSponsors = useMemo(() => {
    return sponsors?.filter((sponsor) => {
      return (
        sponsor.name.toLowerCase().includes(textLower) &&
        (selectedCategories.length === 0 ||
          sponsor.categories.some((c) => selectedCategories.includes(c)))
      );
    });
  }, [sponsors, textLower, selectedCategories]);
  */

  const filteredMedia = useMemo(() => {
    return media?.filter((media) =>
      media.name.toLowerCase().includes(textLower),
    );
  }, [media, textLower]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-full flex flex-col gap-y-14 mt-10">
      <SectionEnter>
        <PartnersIntro />
      </SectionEnter>
      <SectionEnter>
        <div className="w-full flex flex-col lg:flex-row gap-y-10 lg:gap-x-8">
          <div className="w-full lg:w-2/5 flex justify-center lg:max-w-96">
            <div className="w-full flex flex-col gap-y-6">
              <div className="lg:hidden flex gap-x-4">
                <SearchBar text={text} setText={setText} />
                <ResetBtn onReset={onReset} width="w-32" />
              </div>
              <div className="hidden lg:flex lg:flex-col gap-y-6">
                <SearchBar text={text} setText={setText} />
                <ResetBtn onReset={onReset} width="w-full" />
              </div>
              {categories && (
                <Filter
                  name="Categories"
                  options={categories}
                  selected={selectedCategories}
                  onSelect={onSelectCategory}
                />
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-24">
            <div className="w-full">
              <Media media={filteredMedia} />
            </div>
          </div>
        </div>
      </SectionEnter>
    </div>
  );
};

export default PartnersPage;
/*
            <div className="w-full">
              <Sponsors
                sponsors={filteredSponsors}
                sponsorTiers={sponsorTiers}
              />
            </div>
            */
