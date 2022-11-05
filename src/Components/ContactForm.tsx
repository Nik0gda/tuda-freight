import React from "react";
import { useForm } from "react-hook-form";
import parsePhoneNumber from "libphonenumber-js";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full pt-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-extrabold">Apply now</p>
          <div className="mt-5">
            <p className="pl-2 pb-1 text-sm text-black opacity-75">
              First name
            </p>
            <input
              {...register("firstName", {
                required: true,
                maxLength: 30,
                pattern: /^[A-Za-z]+$/i,
              })}
              className="h-10 w-64 rounded-md pl-4 text-xs text-black"
              placeholder="John"
            />
          </div>
          <div className="mt-5">
            <p className="pl-2 pb-1 text-sm text-black opacity-75">Last name</p>
            <input
              {...register("lastName", {
                required: true,
                maxLength: 30,
                pattern: /^[A-Za-z]+$/i,
              })}
              className="h-10 w-64 rounded-md pl-4 text-xs text-black"
              placeholder="Smith"
            />
          </div>
          <div className="mt-5">
            <p className="pl-2 pb-1 text-sm text-black opacity-75">
              Email address
            </p>
            <input
              {...register("email", {
                required: true,
                maxLength: 50,
                pattern:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              })}
              className="h-10 w-64 rounded-md pl-4 text-xs text-black"
              placeholder="you@example.com"
            />
          </div>
          <div className="mt-5">
            <p className="pl-2 pb-1 text-sm text-black opacity-75">
              Phone number
            </p>
            <input
              {...register("phoneNumber", {
                required: true,
                maxLength: 50,
                validate: (value) => {
                  if (!value) return false;
                  const phoneNumber = parsePhoneNumber(value);
                  if (!phoneNumber) return false;
                  return phoneNumber.isPossible();
                },
              })}
              className="h-10 w-64 rounded-md pl-4 text-xs text-black"
              placeholder="+1 (555) 987-6543"
            />
          </div>
          <div className="mt-5">
            <p className="pl-2 pb-1 text-sm text-black opacity-75">Home zip</p>
            <input
              type={"text"}
              {...register("homeZip", {
                required: true,
                maxLength: 7,
              })}
              className="h-10 w-64 rounded-md pl-4 text-xs text-black"
              placeholder="10001"
            />
          </div>
          <div>
            <div className="mt-5 flex items-center">
              <input
                type="checkbox"
                {...register("old", {
                  required: true,
                })}
                className=""
              />
              <p className="pl-2 text-sm font-light text-black opacity-75">
                I’m over 21 years old
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
                I have a valid CDL-A
              </p>
            </div>
          </div>
          <br />
          <input
            value="Apply"
            type="submit"
            className="mx-auto mt-10 mb-20 h-11 w-32 rounded-xl bg-aplly-button text-xl text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
