import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  VideoCameraIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PlusCircleIcon,
  UserCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
function Navigation() {
  return (
    <div className="h-screen flex flex-col">
      <div className="py-3 px-6">
        <Image
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          width={100}
          height={100}
          alt="Instagram logo"
        />
      </div>
      <div className="mt-20">
        <div className="icons">
          <HomeIcon className="w-6" />
          <p className="ml-4">Home</p>
        </div>
        <div className="icons">
          <MagnifyingGlassIcon className="w-6" />
          <p className="ml-4"> Search</p>
        </div>
        <div className="icons">
          <GlobeEuropeAfricaIcon className="w-6" />
          <p className="ml-4"> Explore</p>
        </div>
        <div className="icons">
          <VideoCameraIcon className="w-6" />
          <p className="ml-4"> Reels</p>
        </div>
        <div className="icons">
          <ChatBubbleOvalLeftEllipsisIcon className="w-6" />
          <p className="ml-4"> Messages</p>
        </div>
        <div className="icons">
          <HeartIcon className="w-6" />
          <p className="ml-4"> Notifications</p>
        </div>
        <div className="icons">
          <PlusCircleIcon className="w-6" />
          <p className="ml-4">Create</p>
        </div>
        <div className="icons">
          <UserCircleIcon className="w-6" />
          <p className="ml-4">Profile</p>
        </div>
      </div>
      <div className="mt-auto w-full icons">
        <EllipsisVerticalIcon className="w-6" />
        More
      </div>
    </div>
  );
}

export default Navigation;
