"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import FeedContent from "@/components/FeedContent";
import JoinChallengeModal from "@/components/JoinChallengeModal";
import ChallengeDescriptionModal from "@/components/ChallengeDescriptionModal";
import SubmissionModal from "@/components/SubmissionModal";
import CheckInModal from "@/components/CheckInModal";

export default function Page() {
  const [hasJoined, setHasJoined] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);
  const [showChallengeDesc, setShowChallengeDesc] = useState(false);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [completedDays, setCompletedDays] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [submissionContent, setSubmissionContent] = useState("");
  const [submissionImage, setSubmissionImage] = useState(null);

  useEffect(() => {
    // Set initial theme based on system preference
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleJoin = () => {
    setHasJoined(true);
    setCurrentDay(1);
  };

  const handleDayClick = (day) => {
    setCurrentDay(day);
    if (completedDays.includes(day)) {
      // Already completed, show feed
      setShowSubmissionModal(false);
      setShowCheckInModal(false);
    } else {
      // Not completed, show check-in modal
      setShowCheckInModal(true);
      setShowSubmissionModal(false);
    }
  };

  const handleCheckInClick = () => {
    setShowCheckInModal(false);
    setShowSubmissionModal(true);
  };

  const handleSubmitCheckIn = () => {
    // Mark current day as completed
    const newCompletedDays = completedDays.includes(currentDay)
      ? completedDays
      : [...completedDays, currentDay];

    setCompletedDays(newCompletedDays);

    // Close modals and show the feed with the submission
    setShowSubmissionModal(false);
    setShowCheckInModal(false);
    setSubmissionContent("");
    setSubmissionImage(null);
  };

  if (!hasJoined) {
    return <JoinChallengeModal onJoin={handleJoin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 flex flex-col">
      <Header
        onInfoClick={() => setShowChallengeDesc(true)}
        isDark={isDark}
        onThemeToggle={toggleTheme}
        completedDays={completedDays}
      />

      <div
        className="flex flex-1 pt-16 md:pt-30"
        style={{ paddingTop: "120px" }}
      >
        <Sidebar
          currentDay={currentDay}
          onDayClick={handleDayClick}
          completedDays={completedDays}
        />

        <main className="flex-1 overflow-y-auto md:pb-0 pb-24 pt-24">
          {/* {completedDays.includes(currentDay) ? ( */}
          <FeedContent
            currentDay={currentDay}
            submissionImage={submissionImage}
            submissionContent={submissionContent}
          />
          {/* ) : (
            <div className="flex items-center justify-center h-full min-h-96">
              <button
                onClick={handleCheckInClick}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold transition-colors"
              >
                Check In for Day {currentDay}
              </button>
            </div>
          )} */}
        </main>
      </div>

      <MobileSidebar
        currentDay={currentDay}
        onDayClick={handleDayClick}
        completedDays={completedDays}
      />

      {showChallengeDesc && (
        <ChallengeDescriptionModal
          onClose={() => setShowChallengeDesc(false)}
        />
      )}

      {showCheckInModal && (
        <CheckInModal
          day={currentDay}
          onClose={() => setShowCheckInModal(false)}
          onCheckIn={handleCheckInClick}
        />
      )}

      {showSubmissionModal && (
        <SubmissionModal
          day={currentDay}
          onClose={() => setShowSubmissionModal(false)}
          onSubmit={handleSubmitCheckIn}
          submissionContent={submissionContent}
          setSubmissionContent={setSubmissionContent}
          submissionImage={submissionImage}
          setSubmissionImage={setSubmissionImage}
        />
      )}
    </div>
  );
}
