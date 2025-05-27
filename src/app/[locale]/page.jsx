"use client";
import { useState } from "react";
import Image from "next/image";
import FullScreenImage from "./components/FullScreenImage/";
import { Timer } from "./components/Timer";
import { ArrowUpIcon } from "@heroicons/react/20/solid";

import { Link } from "../../i18n/routing";

import {
  ArrowDownCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { useTranslations } from "next-intl";

import teamsByYear from "./shared/timelinedata/teams";

import ApplyNowPopup from "./components/ApplyNowPopup";

export default function Home() {
  const t = useTranslations("HomePage");

  // Mostrar el popup al entrar
  const [isOpen, setIsOpen] = useState(true);
  const [team, setTeam] = useState(undefined);
  const teamClassName = `opacity-80 hover:opacity-100 transition-all hover:cursor-pointer`;
  const timelineItem = `max-w-[450px] bg-[#121837] border border-[#666A95] text-white text-center rounded-2xl flex flex-col items-center`;
  const currentTimelineItem = `max-w-[450px] bg-[#121837] border border-[#666A95] text-white text-center rounded-2xl flex flex-col items-center md:items-start shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] `;

  const flipCard = (i) => {
    if (typeof window !== "undefined") {
      document.body.querySelectorAll(".thecard")[i].classList.toggle("flipped");
    }
  };

  const flipCardRC = (j) => {
    if (typeof window !== "undefined") {
      document.body
        .querySelectorAll(".thecardRC")
        [j].classList.toggle("flipped");
    }
  };

  const showTeam = (team) => {
    setTeam(team);
    setIsOpen(true);
  };

  return (
    <>
      {/* Muestra el popup si isOpen es true */}
      {isOpen && <ApplyNowPopup onClose={() => setIsOpen(false)} />}
      <div className="text-center h-fit  space-y-8 lg:space-y-20 2xl:space-y-10 bg-gradient-to-t from-[#101321] to-[#40D1FF] px-5 md:px-40 flex flex-col items-center pt-5">
        {/* <Timer /> */}
        <p className="mt-4 font-bold text-xl xs:text-3xl lg:text-5xl 3xl:text-6xl w-full sm:w-5/6 md:w-5/6  text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          {t("title")}
        </p>
        <Link
          href="/stem-with-us"
          className="flex xl:hidden transition-all border border-1 border-[#424B5B] bg-black/[0.8] w-full sm:w-5/6   pl-2 py-2 h-fit  rounded-2xl  items-center justify-evenly hover:cursor-pointer group z-10"
        >
          <Image
            src={"/images/icons/formIcon.webp"}
            alt="form icon"
            width="0"
            height="0"
            sizes="100vw"
            className="hidden sm:block w-9 h-9 md:w-12 md:h-12"
          />
          <div className="text-left">
            <p className="font-semibold text-white md:text-lg group-hover:text-blue-200">
              {t("stemVisitTitle")}
            </p>
            <p className="text-gray-100 text-xs md:text-normal">
              {t("stemVisitSubtitle")}
            </p>
          </div>
          <div>
            <ArrowRightIcon className="hidden sm:block w-8 h-8 text-white transition-transform hover:translate-x-5" />
          </div>
        </Link>
      </div>

      <section className="bg-[#101321] 2xl:h-[240px] px-5 md:pt-10 3xl:py-20 flex flex-col md:flex-row justify-center items-center md:items-start space-y-5 md:space-y-0 ">
        {/* simulation large screen */}
        <Link
          href="/games/Herc-Simulation"
          className="z-10 hidden scale-90 lg:w-[555px] lg:h-[220px] 1xl:scale-100 3xl:scale-110 xl:block absolute left-0 1xl:left-20 3xl:left-60 4xl:left-96 hover:cursor-pointer filter hover:brightness-90 transition-all"
          style={{
            backgroundImage: "url('/images/landing/simulation.webp')",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>

        {/* stem large screen*/}
        <Link
          href="/stem-with-us#form"
          className="hidden xl:flex justify-center gap-5 4xl:gap-20 transition-all border border-1 border-[#424B5B] bg-black/[0.8] w-full  lg:w-[425px] 1xl:w-[520px] 4xl:w-[1000px] 3xl:scale-105 py-2 h-fit md:absolute md:left-1/2 md:transform md:-translate-x-1/2 rounded-full items-center hover:cursor-pointer hover:scale-105 "
        >
          <Image
            src={"/images/icons/formIcon.webp"}
            alt="form icon"
            width={44}
            height={44}
          />
          <div className="text-left">
            <p className="font-semibold text-white md:text-lg">
              {t("stemVisitTitle")}
            </p>
            <p className="text-gray-100 text-xs md:text-normal">
              {t("stemVisitSubtitle")}
            </p>
          </div>
          <div>
            <ArrowRightIcon className="w-5 h-5 text-white transition-transform hover:translate-x-5" />
          </div>
        </Link>

        {/*sponsor us mobile*/}
        <Link
          href="/sponsors"
          className="xl:hidden relative w-full sm:w-5/6 md:w-4/6 h-auto"
        >
          <Image
            src={"/images/landing/sponsorus-rectangle.webp"}
            alt="Sponsor us"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full relative "
          />
          <p className="absolute font-bold text-3xl md:text-4xl text-white top-8 left-8">
            {t("sponsorUsTitle")}
          </p>
          <p className="absolute font-semibold text-lg md:text-2xl text-left text-white top-20 left-8 w-5/6">
            {t("sponsorUsSubtitle")}
          </p>
          <div className="hidden xm:inline-flex w-11/12 absolute top-14 xm:top-20 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <Image
                  src="/images/sponsors/oro.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 xm:w-52 xm:h-52"
                  alt="sponsor level"
                />
              </li>
              <li>
                <Image
                  src="/images/sponsors/plata.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 xm:w-52 xm:h-52"
                  alt="sponsor level"
                />
              </li>
              <li>
                <Image
                  src="/images/sponsors/platino.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 xm:w-52 xm:h-52"
                  alt="sponsor level"
                />
              </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start xm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <Image
                  src="/images/sponsors/oro.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 xm:w-52 xm:h-52"
                  alt="sponsor level"
                />
              </li>
              <li>
                <Image
                  src="/images/sponsors/plata.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 xm:w-52 xm:h-52"
                  alt="sponsor level"
                />
              </li>
              <li>
                <Image
                  src="/images/sponsors/platino.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 md:w-52 md:h-52"
                  alt="sponsor level"
                />
              </li>
            </ul>
          </div>
          <div className="absolute top-1 right-0 bg-[#3b9fc6] rounded-full w-10 h-10 md:w-16 md:h-16  flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-all">
            <ArrowUpIcon className="text-white w-8 h-8 md:w-16 md:h-16  transform rotate-45" />
          </div>
        </Link>

        {/* sponsor us large screen */}
        <Link
          href="/sponsors"
          className="scale-90 lg:w-[555px] lg:h-[240px] 1xl:scale-100 3xl:scale-110 hidden xl:block absolute right-0 1xl:right-20 3xl:right-60 4xl:right-96 text-center"
          style={{
            overflow: "hidden",
            backgroundImage: "url('/images/landing/sponsorus.webp')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 right-5 bg-[#3b9fc6] rounded-full w-16 h-16 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-all">
            <ArrowUpIcon className="text-white w-12 h-12  transform rotate-45" />
          </div>
          <p className="font-bold text-white text-4xl pl-16 pt-3 ">
            {t("sponsorUsTitle")}
          </p>
          <div className="w-11/12 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <Image
                  src="/images/sponsors/oro.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 md:w-56 md:h-56"
                  alt="sponsor level"
                />
              </li>
              <li>
                <Image
                  src="/images/sponsors/plata.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 md:w-56 md:h-56"
                  alt="sponsor level"
                />
              </li>
              <li>
                <Image
                  src="/images/sponsors/platino.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 md:w-56 md:h-56"
                  alt="sponsor level"
                />
              </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <Image
                  src="/images/sponsors/oro.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 md:w-56 md:h-56"
                  alt="sponsor level"
                />
              </li>
              <li>
                <Image
                  src="/images/sponsors/plata.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 md:w-56 md:h-56"
                  alt="sponsor level"
                />
              </li>
              <li>
                <Image
                  src="/images/sponsors/platino.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-36 md:w-56 md:h-56"
                  alt="sponsor level"
                />
              </li>
            </ul>
          </div>
        </Link>
      </section>

      <div className="flex bg-[#101321] text-center flex-col gap-3 md:gap-7 items-center justify-center pt-5 md:pt-3  lg:pt-20 2xl:pt-9 3xl:pt-20">
        <p className="explore-more-text bg-clip-text bg-gradient-to-r from-gray-800 via-white via-50% to-gray-800 text-transparent font-bold text-xl md:text-3xl 3xl:text-4xl w-1/2 md:w-60 2xl:w-96 ">
          {t("exploreMore")}
        </p>
        <div>
          <ArrowDownCircleIcon className="w-10 3xl:w-20 h-10 3xl:h-20 text-white transition-transform animate-bounce" />
        </div>
      </div>

      <div id="about-us" className="bg-[#101321] py-10">
        <section className="transform space-y-20 ">
          <p className="text-center text-white font-bold px-10 text-3xl md:text-5xl 2xl:text-6xl">
            {t("divisionsTitle")}
          </p>

          {/* team divisions large screen */}

          <section className="flex flex-wrap  w-full justify-evenly">
            <div className="group hover:cursor-pointer">
              <Link href={"/human-powered-team"}>
                <FullScreenImage
                  src="/images/timeline/2025-hp.webp"
                  title={"Team HP 2025"}
                  fullSize={false}
                />
              </Link>
              <p className="text-white font-bold text-xl text-center group-hover:text-red-200">
                {t("hpTeam")}
              </p>
            </div>

            <div className="group hover:cursor-pointer h-fit">
              <Link href={"/remote-controlled-team"}>
                <FullScreenImage
                  title={"Team RC 2025"}
                  src="/images/timeline/2025-rc.webp"
                  alt="Team Lead HP"
                  fullSize={false}
                />
              </Link>
              <p className="text-white font-bold text-xl text-center group-hover:text-blue-200">
                {t("rcTeam")}
              </p>
            </div>
          </section>
        </section>
      </div>

      <section
        id="timeline"
        className=" bg-[#101321] justify-between w-full space-y-10 pt-20 px-5 lg:px-40 2xl:px-60 pb-40"
      >
        <p className="text-center outlined-title text-[#101321] text-3xl md:text-7xl font-extrabold w-full ">
          {t("missionTitle")}
        </p>

        <p className="text-center outlined-subtitle text-[#101321] text-2xl md:text-5xl font-extrabold w-full ">
          {t("timelineTitle")}
        </p>

        <div className="big-timeline">
          <Timeline position="alternate-reverse" className="w-full">
            {teamsByYear.map((yearData, i) => (
              <TimelineItem key={i} className="z-10 mt-5 xl:min-h-[350px]">
                {yearData.teams.length > 1 && (
                  <TimelineOppositeContent className="2xl:flex 2xl:justify-center">
                    <div
                      className={`${
                        i === teamsByYear.length - 1
                          ? currentTimelineItem
                          : timelineItem
                      }`}
                    >
                      <div className="gap-4 px-4 flex flex-col md:flex-row items-center w-full justify-evenly bg-gradient-to-b from-cyan-600 to-cyan-900 rounded-t-2xl py-4">
                        <p className="text-2xl text-center font-semibold">
                          {t(yearData.teams[1]?.title)}
                        </p>
                      </div>
                      <div className="p-4 space-y-5">
                        <p className="text-md md:text-lg text-center font-semibold px-8 md:px-4">
                          {t(yearData.teams[1]?.description)}
                        </p>
                        <div className="rounded-2xl overflow-hidden">
                          <FullScreenImage
                            src={yearData.teams[1]?.image}
                            title={"Team Image"}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="px-8 md:px-4 w-full h-30 rounded-2xl"
                          />
                        </div>
                        {/* <button
                        onClick={() => showTeam(team)}
                        className="bg-gradient-to-br from-cyan-950 to-cyan-800 p-4 rounded-xl font-semibold hover:scale-105 transition-all"
                      >
                        Ver mas
                      </button> */}
                      </div>
                    </div>
                  </TimelineOppositeContent>
                )}

                {yearData.teams.length < 2 && (
                  <TimelineOppositeContent>
                    <div className="rounded-2xl overflow-hidden w-full h-full flex items-center">
                      <FullScreenImage
                        src={yearData.teams[0].image}
                        title="Team Image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="px-8 md:px-4 w-full h-30 max-w-[450px] rounded-2xl"
                      />
                    </div>
                  </TimelineOppositeContent>
                )}

                <TimelineSeparator>
                  <p className="text-5xl lg:text-6xl font-boldrounded-xl bg-cyan-950/[0.7] rounded-lg px-2 py-1">
                    {yearData.year}
                  </p>
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent className=" w-full  flex items-center">
                  <div
                    className={`${
                      i === teamsByYear.length - 1
                        ? currentTimelineItem
                        : timelineItem
                    }`}
                  >
                    <div className="px-4 flex flex-col md:flex-row items-center w-full justify-evenly bg-gradient-to-b from-cyan-600 to-cyan-900 rounded-t-2xl py-4">
                      <p className="text-2xl text-center font-semibold">
                        {t(yearData.teams[0].title)}
                      </p>
                    </div>
                    <div className="p-4 space-y-5">
                      <p className="text-md md:text-lg text-center font-semibold px-8 md:px-4">
                        {t(yearData.teams[0].description)}
                      </p>
                      {yearData.teams.length > 1 && (
                        <div className="rounded-2xl overflow-hidden">
                          <FullScreenImage
                            src={yearData.teams[0].image}
                            title="Team Image"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="px-8 md:px-4 w-full h-30 rounded-2xl"
                          />
                        </div>
                      )}
                      {/* <button
                      onClick={() => showTeam(team)}
                      className="bg-gradient-to-br from-cyan-950 to-cyan-800 p-4 rounded-xl font-semibold hover:scale-105 transition-all"
                    >
                      Ver mas
                    </button> */}
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        {/* <TimelineModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          team={team}
        /> */}

        <div className="mobile-timeline lg:hidden relative flex flex-wrap justify-around xs:px-8 md:px-0 gap-20">
          <div className="w-[1px] bg-white h-full absolute left-1/2 transform -translate-x-1/2 "></div>
          {teamsByYear.map((yearData, i) => (
            <div
              key={i}
              className={`flex flex-col gap-5 ${
                yearData.teams.length > 1
                  ? "bg-black p-2 xs:p-5 rounded-2xl"
                  : ""
              }`}
            >
              <div className="z-10 thecard" onClick={() => flipCard(i)}>
                <div
                  className={
                    i === teamsByYear.length - 1
                      ? `${currentTimelineItem} thefront`
                      : `${timelineItem} thefront`
                  }
                >
                  <div className="md:px-4 flex flex-col xm:flex-row md:flex-row items-center w-full justify-evenly bg-gradient-to-b from-cyan-600 to-cyan-900 rounded-t-2xl py-4 md:py-8">
                    <p className="text-5xl lg:text-6xl font-boldrounded-xl bg-cyan-950/[0.7] rounded-lg p-1">
                      {yearData.year}
                    </p>
                    <p className="text-2xl lg:text-3xl text-center xm:text-left w-3/4 xs:w-1/2">
                      {t(yearData.teams[0].title)}
                    </p>
                  </div>
                  <div className="py-2 px-2 space-y-5">
                    <p className="text-md md:text-lg text-center md:text-left font-semibold xs:px-5 md:px-4">
                      {t(yearData.teams[0].description)}
                    </p>
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src={yearData.teams[0].image}
                        alt="Team Image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="xs:px-2 xs:pb-2 md:px-4 rounded-2xl w-full h-full "
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    i === teamsByYear.length - 1
                      ? `${currentTimelineItem} theback`
                      : `${timelineItem} theback`
                  }
                >
                  <div className="p-4 space-y-5">
                    <div className="flex justify-evenly flex-col gap-10">
                      {yearData.teams[0].teamAwards?.map((award, j) => (
                        <div
                          key={j}
                          className="flex flex-col items-center bg-gradient-to-br from-blue-950 via cyan-900 to-black p-4 bg-opacity-60 border-2 border-white rounded-xl text-white font-medium"
                        >
                          <Image
                            alt={award.title ? award.title : "award"}
                            src="/images/timeline/glass-award.webp"
                            width={50}
                            height={50}
                          />
                          <p className="font-bold text-lg">{award.title}</p>
                          <p className="font-medium">{award.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {yearData.teams.length > 1 && (
                <div className="z-10 thecard" onClick={() => flipCard(i + 1)}>
                  <div
                    className={
                      i === teamsByYear.length - 1
                        ? `${currentTimelineItem} thefront`
                        : `${timelineItem} thefront`
                    }
                  >
                    <div className="md:px-4 flex flex-col md:flex-row items-center w-full justify-evenly bg-gradient-to-b from-cyan-600 to-cyan-900 rounded-t-2xl py-4 md:py-8">
                      <p className="text-5xl ont-boldrounded-xl bg-cyan-950/[0.7] rounded-lg p-1">
                        {yearData.year}
                      </p>
                      <p className="text-2xl text-center md:text-left ">
                        {t(yearData.teams[1]?.title)}
                      </p>
                    </div>
                    <div className="p-4 space-y-5">
                      <p className="text-md md:text-lg text-center md:text-left font-semibold md:px-4">
                        {t(yearData.teams[1]?.description)}
                      </p>
                      <div className="rounded-2xl overflow-hidden">
                        <Image
                          src={yearData.teams[1]?.image}
                          alt="Team Image"
                          width="0"
                          height="0"
                          sizes="100vw"
                          className="pb-8 md:px-4 w-full h-full h-30"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      i === teamsByYear.length - 1
                        ? `${currentTimelineItem} theback`
                        : `${timelineItem} theback`
                    }
                  >
                    <div className="p-4 space-y-5">
                      <div className="flex justify-evenly flex-col gap-10">
                        {yearData.teams[1]?.teamAwards?.map((award, j) => (
                          <div
                            key={j}
                            className="flex flex-col items-center bg-gradient-to-br from-blue-950 via cyan-900 to-black p-4 bg-opacity-60 border-2 border-white rounded-xl text-white font-medium"
                          >
                            <Image
                              alt={award.title ? award.title : "award"}
                              src="/images/timeline/glass-award.webp"
                              width={50}
                              height={50}
                            />
                            <p className="font-bold text-lg">{award.title}</p>
                            <p className="font-medium">{award.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
