import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const ContentSkeleton = ({ theme }) => {
  return (
    <>
      <SkeletonTheme
        color={theme === "dark" ? "#3a3b3c" : "#eeeeef"}
        highlightColor={theme === "dark" ? "#2c2d2d" : "#d8dcdc"}
      >
        <Skeleton count={1} height={60} />
        <p className="contentLoad"></p>
        <Skeleton count={5} height={20} />
        <p className="contentLoad"></p>
        <Skeleton count={1} height={40} />
        <p className="contentLoadBottom"></p>
        {/* project load */}
        <Skeleton count={1} height={50} width={250} />
        <p></p>
        <Skeleton count={3} height={20} />
        <p></p>
        <Skeleton count={1} height={40} width={200} />

        <p className="contentLoad"></p>
        <Skeleton count={1} height={50} width={250} />
        <p></p>
        <Skeleton count={3} height={20} />
        <p></p>
        <Skeleton count={1} height={40} width={200} />

        <p className="contentLoad"></p>
        <Skeleton count={1} height={50} width={250} />
        <p></p>
        <Skeleton count={3} height={20} />
        <p></p>
        <Skeleton count={1} height={40} width={200} />
      </SkeletonTheme>
    </>
  );
};
