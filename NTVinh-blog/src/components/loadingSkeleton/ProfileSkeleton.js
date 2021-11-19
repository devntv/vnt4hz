import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const ProfileSkeleton = ({ theme }) => {
  return (
    <>
      <div className="p-f  container_shadow">
        <SkeletonTheme
          color={theme === "dark" ? "#3a3b3c" : "#eeeeef"}
          highlightColor={theme === "dark" ? "#2c2d2d" : "#d8dcdc"}
        >
          <Skeleton
            duration={2}
            className="loadingcontentProfile"
            circle={true}
            height={216}
            width={216}
          />
          <p></p>
          <Skeleton
            className="loadingcontentProfile"
            count={1}
            height={40}
            width={200}
          />
          <p></p>
          <div className="loadingcontentProfile">
            <Skeleton count={1} height={30} width={200} />

            <Skeleton count={1} width={250} />

            <Skeleton count={1} width={250} />

            <Skeleton count={1} width={250} />
          </div>
          <p></p>
          <div className="loadingGitLinked">
            <Skeleton count={1} height={40} width={90} />
            <p></p>
            <Skeleton count={1} height={40} width={90} />
          </div>
          <p></p>
          <div className="loadingGitLinked">
            <Skeleton count={1} height={40} width={110} />
            <p></p>
            <Skeleton count={1} height={40} width={140} />
          </div>
          <p></p>
          <Skeleton
            className="loadingcontentProfile"
            count={1}
            height={30}
            width={250}
          />
          <p></p>
        </SkeletonTheme>
      </div>
    </>
  );
};
