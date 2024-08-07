"use client";

import { useState, useMemo } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";
import ResetBtn from "../Components/ResetBtn";
import Exhibitors from "../Components/Exhibitors";
import useExhibitors from "../Hooks/useExhibitors";
import useExhibitorsIndex from "../Hooks/useExhibitorsIndex";

const ExhibitorsPage = () => {
  const { exhibitors, isLoading, isError } = useExhibitors();
  const [text, setText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { categories } = useExhibitorsIndex();

  const onReset = () => {
    setText("");
    setSelectedCategories([]);
  };

  const filteredExhibitors = useMemo(() => {
    return exhibitors?.filter(
      (exhibitor) =>
        exhibitor.name.toLowerCase().includes(text.toLowerCase()) &&
        (selectedCategories.length === 0 ||
          exhibitor.categories.some((c) => selectedCategories.includes(c))),
    );
  }, [exhibitors, text, selectedCategories]);

  const onSelectCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
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
        <Exhibitors exhibitors={filteredExhibitors} />
      </div>
    </div>
  );
};

export default ExhibitorsPage;
