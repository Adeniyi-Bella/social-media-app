"use client";

import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { BsChatDots, BsTrash3 } from "react-icons/bs";
import { ImMusic } from "react-icons/im";
import moment from "moment";
import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import ClientOnly from "../ClientOnly";
import { useRouter } from "next/navigation";
import { CommentsHeaderCompTypes } from "@/app/types";

export default function CommentsHeader({
  post,
  params,
}: CommentsHeaderCompTypes) {
  const router = useRouter();
  const [hasClickedLike, setHasClickedLike] = useState<boolean>(false);
  const [isDeleteing, setIsDeleteing] = useState<boolean>(false);
  const [userLiked, setUserLiked] = useState<boolean>(false);
  const deletePost = async () => {
    console.log("Deleting post");
  };


  const likeOrUnlike = async () => {
    console.log(likeOrUnlike);
    
  }
  return (
    <>
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center">
          <Link href={`/profile/${post?.user_id}`}>
            {post?.profile.image ? (
              <img
                className="rounded-full lg:mx-0 mx-auto"
                width="40"
                src={post?.profile.image}
              />
            ) : (
              <div className="w-[40px] h-[40px] bg-gray-200 rounded-full"></div>
            )}
          </Link>
          <div className="ml-3 pt-0.5">
            <Link
              href={`/profile/${post?.user_id}`}
              className="relative z-10 text-[17px] font-semibold hover:underline"
            >
              {post?.profile.name}
            </Link>

            <div className="relative z-0 text-[13px] -mt-5 font-light">
              {post?.profile.name}
              <span className="relative -top-[2px] text-[30px] pl-1 pr-0.5 "></span>
              <span className="font-medium">
                {(post?.created_at)}
              </span>
            </div>
          </div>
        </div>
        {true ? (
          <div>
            {isDeleteing ? (
              <BiLoaderCircle className="animate-spin" size="25" />
            ) : (
              <button disabled={isDeleteing} onClick={() => deletePost()}>
                <BsTrash3 className="cursor-pointer" size="25" />
              </button>
            )}
          </div>
        ) : null}
      </div>
      <p className="px-8 mt-4 text-sm">{post?.text}</p>

      <p className="flex item-center gap-2 px-8 mt-4 text-sm font-bold">
        <ImMusic size="17" />
        original sound - {post?.profile.name}
      </p>

      <div className="flex items-center px-8 mt-8">
        <ClientOnly>
          <div className="pb-4 text-center flex items-center">
            <button
              disabled={hasClickedLike}
                onClick={() => likeOrUnlike()}
              className="rounded-full bg-gray-200 p-2 cursor-pointer"
            >
              {!hasClickedLike ? (
                <AiFillHeart color={"#ff2626"} size="25" />
              ) : (
                <BiLoaderCircle className="animate-spin" size="25" />
              )}
            </button>
            <span className="text-xs pl-2 pr-4 text-gray-800 font-semibold">
              30
            </span>
          </div>
        </ClientOnly>

        <div className="pb-4 text-center flex items-center">
          <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
            <BsChatDots size={25} />
          </div>
          <span className="text-xs pl-2 text-gray-800 font-semibold">30</span>
        </div>
      </div>
    </>
  );
}
