"use client";

import MainLayout from "@/app/layouts/MainLayout";
import { ProfilePageTypes, User } from "@/app/types";
import ClientOnly from "@/app/components/ClientOnly";
import { BsPencil } from "react-icons/bs";
import { useEffect } from "react";
import PostUser from "@/app/components/profile/PostUser";

export default function Profile({ params }: ProfilePageTypes) {
  const currentProfile = {
    id: "123",
    user_id: "123",
    name: "Adeniyi Bella",
    image: "https://placehold.co/200",
    bio: "This is my bio",
  };

  return (
    <>
      <MainLayout>
        <div className="profile-container">
          <div className="flex w-[calc(100vw-230px)]">
            <ClientOnly>
              {true ? (
                <img className="image-container" src={currentProfile?.image} />
              ) : (
                <div className="placeholder-image" />
              )}
            </ClientOnly>

            <div className="ml-5 w-full">
              <ClientOnly>
                {currentProfile?.name ? (
                  <div>
                    <p className="text-[30px] font-bold truncate">
                      {currentProfile?.name}
                    </p>
                    <p className="text-[18px] truncate">
                      {currentProfile?.name}
                    </p>
                  </div>
                ) : (
                  <div className="h-[60px]" />
                )}
              </ClientOnly>

              {true ? (
                <button className="edit-profile-button">
                  <BsPencil className="mt-0.5 mr-1" size="18" />
                  <span>Edit profile</span>
                </button>
              ) : (
                <button className="follow-button">Follow</button>
              )}
            </div>
          </div>

          <div className="flex items-center pt-4">
            <div className="mr-4">
              <span className="stats">10K</span>
              <span className="stats-description">Following</span>
            </div>
            <div className="mr-4">
              <span className="stats">44K</span>
              <span className="stats-description">Followers</span>
            </div>
          </div>

          <ClientOnly>
            <p className="bio">{currentProfile?.bio}</p>
          </ClientOnly>

          <ul className="w-full flex items-center pt-4 border-b">
            <li className="nav-item nav-item-active">
              Videos
            </li>
            <li className="nav-item text-gray-500">
              Liked
            </li>
          </ul>

          <ClientOnly>
            <div className="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
              {/* {postsByUser?.map((post, index) => ( */}
              <PostUser
                post={{
                  id: "123",
                  user_id: "123",
                  video_url: "/game_video.mp4",
                  text: "This is a post",
                  created_at: "date here",
                }}
              />
              {/* ))} */}
            </div>
          </ClientOnly>

          <div className="pb-20" />
        </div>
      </MainLayout>
    </>
  );
}
