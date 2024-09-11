"use client";

import { useState, useEffect } from "react";
import SectionLayout from "@/layouts/SectionLayout";
import CardLayout from "@/layouts/CardLayout";
import EduSummit from "@/components/Button/EduSummit";
import Email from "@/components/SVG/Email";
import School from "@/components/SVG/School";
import { FirstName, LastName } from "@/components/SVG/Name";

const Student = ({ widget }) => {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prevCooldown) => prevCooldown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeSchool = (e) => {
    setSchool(e.target.value);
  };

  const onChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const checkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const eduRegex = /\.edu$/;
    return emailRegex.test(email);
    // return emailRegex.test(email) && eduRegex.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (cooldown > 0) {
      setMessage(`Please wait ${cooldown} seconds before resending.`);
      return;
    }
    if (!checkEmail(email)) {
      setMessage("Please enter a valid .edu email address");
      return;
    }
    if (!school) {
      setMessage("School is required");
      return;
    }
    if (!firstname) {
      setMessage("First name is required");
      return;
    }
    if (!lastname) {
      setMessage("Last name is required");
      return;
    }

    const res = await fetch("https://api.gptdao.ai/student/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email, 
        school_name: school,
        first_name: firstname,
        last_name: lastname,
      }),
    });

    if (res.ok) {
      setSent(true);
      setCooldown(120);
      setMessage("");
      return;
    }

    const data = await res.json();
    setMessage(data.detail);
  };

  return (
    <SectionLayout title="Student Verification" widget={widget}>
      <div className="w-full md:w-1/2 max-w-lg mt-8 md:mt-10 text-theme1Light1">
        <CardLayout bgColor="bg-theme1Dark2">
          <div className="flex flex-col gap-6 p-4 items-center justify-center">
            <div className="w-full flex rounded-full shadow-lg bg-theme1Dark2 p-1 text-themeLight1 border border-theme1Light1">
              <div className="flex p-1 justify-center items-center rounded-full">
                <Email />
              </div>
              <input
                type="text"
                placeholder="Email..."
                className="w-full border-none outline-none bg-transparent pl-2 placeholder-theme1Light1"
                onChange={onChangeEmail}
                maxLength="50"
                value={email}
              />
            </div>
            <div className="w-full flex rounded-full shadow-lg bg-theme1Dark2 p-1 text-themeLight1 border border-theme1Light1">
              <div className="flex p-1 justify-center items-center rounded-full">
                <School />
              </div>
              <input
                type="text"
                placeholder="School..."
                className="w-full border-none outline-none bg-transparent pl-2 placeholder-theme1Light1"
                onChange={onChangeSchool}
                maxLength="50"
                value={school}
              />
            </div>
            <div className="w-full flex rounded-full shadow-lg bg-theme1Dark2 p-1 text-themeLight1 border border-theme1Light1">
              <div className="flex p-1 justify-center items-center rounded-full">
                <FirstName />
              </div>
              <input
                type="text"
                placeholder="First Name..."
                className="w-full border-none outline-none bg-transparent pl-2 placeholder-theme1Light1"
                onChange={onChangeFirstname}
                maxLength="50"
                value={firstname}
              />
            </div>
            <div className="w-full flex rounded-full shadow-lg bg-theme1Dark2 p-1 text-themeLight1 border border-theme1Light1">
              <div className="flex p-1 justify-center items-center rounded-full">
                <LastName />
              </div>
              <input
                type="text"
                placeholder="Last Name..."
                className="w-full border-none outline-none bg-transparent pl-2 placeholder-theme1Light1"
                onChange={onChangeLastname}
                maxLength="50"
                value={lastname}
              />
            </div>
            {message && <div className="text-red-500">{message}</div>}
            <div class="cf-turnstile" data-sitekey="0x4AAAAAAAjqeWurwPyWFCp7"></div>
            <div className="flex flex-col items-center justify-center gap-4">
              {sent ? (
                <>
                  <div className="text-theme1Light1">
                    Please check your email for the verification link
                  </div>
                  <EduSummit onSubmit={onSubmit} cooldown={cooldown} />
                </>
              ) : (
                <>
                  <EduSummit onSubmit={onSubmit} />
                </>
              )}
            </div>
          </div>
        </CardLayout>
      </div>
    </SectionLayout>
  );
};

export default Student;