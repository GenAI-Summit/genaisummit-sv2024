"use client";

import { useState, useMemo } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Sponsors from "../Components/Sponsors";
import Media from "../Components/Media";
import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";
import ResetBtn from "../Components/ResetBtn";
import useExhibitors from "../Hooks/useExhibitors";
import useExhibitorsIndex from "../Hooks/useExhibitorsIndex";

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
    <>
      <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-4">
        <div className="w-full md:w-2/5 md:max-w-96 flex justify-center">
          <div className="w-full md:w-[80%] flex flex-col gap-y-4">
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
        <div className="w-full">
          <Sponsors sponsors={filteredSponsors} sponsorTiers={sponsorTiers} />
          <Media media={filteredMedia} />
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
