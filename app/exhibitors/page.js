"use client";

import { useState, useMemo } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";
import Exhibitors from "../Components/Exhibitors";
import useExhibitors from "../Hooks/useExhibitors";
import useExhibitorsIndex from "../Hooks/useExhibitorsIndex";

const ExhibitorsPage = () => {
  const { exhibitors, isLoading, isError } = useExhibitors();
  const [text, setText] = useState("");
  const [selectedTiers, setSelectedTiers] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { tiers, categories } = useExhibitorsIndex();

  const filteredExhibitors = useMemo(() => {
    return exhibitors?.filter(
      (exhibitor) =>
        exhibitor.name.toLowerCase().includes(text) &&
        (selectedTiers.length === 0 ||
          selectedTiers.includes(exhibitor.tier)) &&
        (selectedCategories.length === 0 ||
          exhibitor.categories.some((c) => selectedCategories.includes(c))),
    );
  }, [exhibitors, text, selectedTiers, selectedCategories]);

  const onSelectTier = (tier) => {
    if (selectedTiers.includes(tier)) {
      setSelectedTiers(selectedTiers.filter((t) => t !== tier));
    } else {
      setSelectedTiers([...selectedTiers, tier]);
    }
  };

  const onSelectCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const onChange = (e) => {
    setText(e.target.value.toLowerCase());
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-4">
      <div className="w-full md:w-2/5 md:max-w-96 flex justify-center">
        <div className="w-full md:w-[80%] flex flex-col gap-y-4">
          <SearchBar onChange={onChange} />
          {tiers && (
            <Filter
              name="Tiers"
              options={tiers}
              selected={selectedTiers}
              onSelect={onSelectTier}
            />
          )}
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
      <div className="w-full">
        <Exhibitors exhibitors={filteredExhibitors} />
      </div>
    </div>
  );
};

export default ExhibitorsPage;
