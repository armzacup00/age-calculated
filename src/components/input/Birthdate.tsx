import { useState } from "react";
import iconArrow from "@/images/icon-arrow.svg";
import dayjs from "dayjs";
import Image from "next/image";

export default function Birthdate() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [error, setError] = useState({ day: "", month: "", year: "" });
  const [colorDays, setColorDays] = useState("text-Smokey_grey");
  const [colorMonth, setColorMonth] = useState("text-Smokey_grey");
  const [colorYears, setColorYears] = useState("text-Smokey_grey");

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(event.target.value);
    setError((prev) => ({ ...prev, day: "" }));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
    setError((prev) => ({ ...prev, month: "" }));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
    setError((prev) => ({ ...prev, year: "" }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateInputs()) {
      calculateAge();
    }
  };

  const validateInputs = () => {
    let isValid = true;
    if (!day || parseInt(day) < 1 || parseInt(day) > 31) {
      setError((prev) => ({ ...prev, day: "Must be a valid day" }));
      setColorDays("text-Light_red");
      isValid = false;
    }
    if (!month || parseInt(month) < 1 || parseInt(month) > 12) {
      setError((prev) => ({ ...prev, month: "Must be a valid month" }));
      setColorMonth("text-Light_red");
      isValid = false;
    }
    if (
      !year ||
      parseInt(year) < 1 ||
      parseInt(year) > new Date().getFullYear()
    ) {
      setError((prev) => ({ ...prev, year: "Must be in the past" }));
      setColorYears("text-Light_red");
      isValid = false;
    }
    if (day == "") {
      setError((prev) => ({ ...prev, day: "this field is required" }));
      isValid = false;
    }
    if (month == "") {
      setError((prev) => ({ ...prev, month: "this field is required" }));
      isValid = false;
    }
    if (year == "") {
      setError((prev) => ({ ...prev, year: "this field is required" }));
      isValid = false;
    }
    return isValid;
  };

  const calculateAge = () => {
    const now = new Date();
    const birth = new Date(`${year}-${month}-${day}`);
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    setAge({ years, months, days });
  };

  return (
    <div className="bg-white sm:p-8 sm:w-auto rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-setting relative w-setting p-5">
      <form onSubmit={handleSubmit} className="flex gap-4 relative mb-10">
        <div className="grid">
          <small className={`${colorDays} font-bold `}>D A Y</small>
          <input
            className="font-bold border-solid border-2 sm:w-40 p-4 rounded-md text-4xl focus:outline-purple w-36"
            type="text"
            placeholder="DD"
            value={day}
            onChange={handleDayChange}
          />
          {error.day ? (
            <p className=" text-Light_red">{error.day}</p>
          ) : (
            <p className=" opacity-0">0</p>
          )}
        </div>

        <div className="grid">
          <small className={`${colorMonth} font-bold `}>M O N T H</small>
          <input
            className="font-bold border-solid border-2 sm:w-40 p-4 rounded-md text-4xl focus:outline-purple w-36"
            type="text"
            placeholder="MM"
            value={month}
            onChange={handleMonthChange}
          />
          {error.month ? (
            <p className=" text-Light_red">{error.month}</p>
          ) : (
            <p className=" opacity-0">0</p>
          )}
        </div>

        <div className="grid">
          <small className={`${colorYears} font-bold  `}>Y E A R</small>
          <input
            className="font-bold border-solid border-2 sm:w-40 p-4 rounded-md text-4xl focus:outline-purple w-36"
            type="text"
            placeholder="YYYY"
            value={year}
            onChange={handleYearChange}
          />
          {error.year ? (
            <p className=" text-Light_red">{error.year}</p>
          ) : (
            <p className=" opacity-0">0</p>
          )}
        </div>
        <button
          className=" bg-purple p-4 rounded-full h-16 sm:relative absolute left-52 sm:left-0 top-32 active:bg-black "
          type="submit"
        >
          <Image src={iconArrow} alt="arrow" width={34} height={34} />
        </button>
      </form>
      <hr />
      <div className=" mt-8">
        <p className="text-7xl font-extrabold italic">
          {age.years ? (
            <span className=" text-purple">{age.years}</span>
          ) : (
            <span className=" text-purple">- -</span>
          )}{" "}
          years
        </p>
        <p className="text-7xl font-extrabold italic">
          {age.months ? (
            <span className=" text-purple">{age.months}</span>
          ) : (
            <span className=" text-purple">- -</span>
          )}{" "}
          months
        </p>
        <p className="text-7xl font-extrabold italic">
          {age.days ? (
            <span className=" text-purple">{age.days}</span>
          ) : (
            <span className=" text-purple">- -</span>
          )}{" "}
          days
        </p>
      </div>
    </div>
  );
}
