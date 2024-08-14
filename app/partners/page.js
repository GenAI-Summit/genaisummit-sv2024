"use client";

import { useState, useMemo } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Sponsors from "../Components/Sponsors";
import Media from "../Components/Media";
import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";
import ResetBtn from "../Components/Button/ResetBtn";
import useExhibitors from "../Hooks/useExhibitors";
import useExhibitorsIndex from "../Hooks/useExhibitorsIndex";
import PartnersIntro from "../Components/Intro/PartnersIntro";
import SectionEnter from "../Motions/SectionEnter";

const PartnersPage = () => {
  const { sponsors, media, sponsorTiers, isLoading, isError } = useExhibitors();
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

  const filteredSponsors = useMemo(() => {
    return sponsors?.filter((sponsor) => {
      return (
        sponsor.name.toLowerCase().includes(textLower) &&
        (selectedCategories.length === 0 ||
          sponsor.categories.some((c) => selectedCategories.includes(c)))
      );
    });
  }, [sponsors, textLower, selectedCategories]);

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
        <div className="w-full flex flex-col lg:flex-row gap-y-4 lg:gap-x-8">
          <div className="w-full lg:w-2/5 flex justify-center lg:max-w-96">
            <div className="w-full flex flex-col gap-y-6">
              <SearchBar text={text} setText={setText} />
              {categories && (
                <Filter
                  name="Categories"
                  options={categories}
                  selected={selectedCategories}
                  onSelect={onSelectCategory}
                />
              )}
              <ResetBtn onReset={onReset} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-16">
            <div className="w-full">
              <Sponsors
                sponsors={filteredSponsors}
                sponsorTiers={sponsorTiers}
              />
            </div>
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
