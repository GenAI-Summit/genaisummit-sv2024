"use client";

import SectionEnter from "@/motions/SectionEnter";

const EduVerifyPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      school_name: e.target.school.value,
      first_name: e.target.firstname.value,
      last_name: e.target.lastname.value,
    };
    console.log(data);
    const res = await fetch("https://api.gptdao.ai/student/start", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result.message !== "ok") {
      alert("Error");
      console.log(result);
      return;
    }
    console.log(result.data);
  };
  return (
    <SectionEnter>
      <div className="w-full mt-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Education Verification</h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-4 mt-6 justify-center items-start"
        >
          <div className="flex space-x-2">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input type="email" id="email" name="email" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-theme1Dark1 w-72" />
          </div>
          <div className="flex space-x-2">
            <label htmlFor="school" className="mb-1 font-medium">School</label>
            <input type="text" id="school" name="school" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-theme1Dark1 w-72" />
          </div>
          <div className="flex space-x-2">
            <label htmlFor="firstname" className="mb-1 font-medium">First Name</label>
            <input type="text" id="firstname" name="firstname" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-theme1Dark1 w-72" />
          </div>
          <div className="flex space-x-2">
            <label htmlFor="lastname" className="mb-1 font-medium">Last Name</label>
            <input type="text" id="lastname" name="lastname" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-theme1Dark1 w-72" />
          </div>
          <button type="submit" className="px-3 py-2 bg-theme1Dark1 text-theme1Light1 rounded-md">Submit</button>
        </form>
      </div>
    </SectionEnter>
  );
};

export default EduVerifyPage;
