import React from "react";
import { useForm } from "react-hook-form";
import parsePhoneNumber from "libphonenumber-js";
import { languageText } from "../translations";

const ContactForm = ({
  selectedLanguageText,
}: {
  selectedLanguageText: languageText;
}) => {
  const { register, handleSubmit } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const {
    form: {
      age,
      cdla,
      email,
      firstName,
      lastName,
      homeZipCode,
      phoneNumber,
      successMessageP1,
      successMessageP2,
      apply,
    },
  } = selectedLanguageText;
  const onSubmit = async (data: any, e: any) => {
    // fetch post request to /api/send-email

    e.target.reset();

    const req = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await req.json();
    console.log(res);

    setIsFormSubmitted(true);
  };
  return (
    <div className="w-full pt-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-extrabold md:text-4xl">
            {selectedLanguageText.navbar.applyNow}
          </p>
          <div className="md:flex md:gap-4">
            <div className="mt-5">
              <p className="pl-2 pb-1 text-sm text-black opacity-75">
                {firstName}
              </p>
              <input
                {...register("firstName", {
                  required: true,
                  maxLength: 30,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="h-10 w-64 rounded-md pl-4 text-xs text-black md:w-52"
                placeholder="John"
              />
            </div>
            <div className="mt-5">
              <p className="pl-2 pb-1 text-sm text-black opacity-75">
                {lastName}
              </p>
              <input
                {...register("lastName", {
                  required: true,
                  maxLength: 30,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="h-10 w-64 rounded-md pl-4 text-xs text-black md:w-52"
                placeholder="Smith"
              />
            </div>
          </div>
          <div className="mt-5">
            <p className="pl-2 pb-1 text-sm text-black opacity-75">{email}</p>
            <input
              {...register("email", {
                required: true,
                maxLength: 50,
                pattern:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              })}
              className="h-10 w-64 rounded-md pl-4 text-xs text-black md:w-[27rem]"
              placeholder="you@example.com"
            />
          </div>
          <div className="mt-5">
            <p className="pl-2 pb-1 text-sm text-black opacity-75">
              {phoneNumber}
            </p>
            <input
              {...register("phoneNumber", {
                required: true,
                maxLength: 50,
                validate: (value) => {
                  if (!value) return false;
                  const phoneNumber = parsePhoneNumber(value, "US");
                  if (!phoneNumber) return false;
                  return phoneNumber.isPossible();
                },
              })}
              className="h-10 w-64 rounded-md pl-4 text-xs text-black md:w-[27rem]"
              placeholder="(555) 987-6543"
            />
          </div>
          <div className="md:flex md:items-end md:gap-12">
            <div className="mt-5">
              <p className="pl-2 pb-1 text-sm text-black opacity-75">
                {homeZipCode}
              </p>
              <input
                type={"text"}
                {...register("homeZip", {
                  required: true,
                  maxLength: 7,
                })}
                className="h-10 w-64 rounded-md pl-4 text-xs text-black md:w-52"
                placeholder="10001"
              />
            </div>
            <div>
              <div className="mt-5 flex items-center md:pr-5">
                <input
                  type="checkbox"
                  {...register("old", {
                    required: true,
                  })}
                  className=""
                />
                <p className="pl-2 text-sm font-light text-black opacity-75">
                  {age}
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("cdla", {
                    required: true,
                  })}
                  className=""
                />
                <p className="pl-2 text-sm font-light text-black opacity-75">
                  {cdla}
                </p>
              </div>
            </div>
          </div>
          <br />
          {isFormSubmitted && (
            <p className="pt-10 text-center text-xl font-bold text-call">
              {successMessageP1}
              <br /> {successMessageP2}
            </p>
          )}
          <input
            value={apply}
            type="submit"
            className="mx-auto mt-10 mb-20 h-11 w-32 rounded-xl bg-aplly-button text-xl text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
