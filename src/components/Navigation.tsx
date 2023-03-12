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
    <div>
      <div>
        <Image
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          width={100}
          height={100}
          alt="Instagram logo"
        />
      </div>
      <div>
        <div>
          <HomeIcon className="w-6" />
          Home
        </div>
        <div>
          <MagnifyingGlassIcon className="w-6" />
          Search
        </div>
        <div>
          <GlobeEuropeAfricaIcon className="w-6" />
          Explore
        </div>
        <div>
          <VideoCameraIcon className="w-6" />
          Reels
        </div>
        <div>
          <ChatBubbleOvalLeftEllipsisIcon className="w-6" />
          Messages
        </div>
        <div>
          <HeartIcon className="w-6" />
          Notifications
        </div>
        <div>
          <PlusCircleIcon className="w-6" />
          Plus circle
        </div>
        <div>
          <UserCircleIcon className="w-6" />
          Profile
        </div>
      </div>
      <div>
        <EllipsisVerticalIcon className="w-6" />
        More
      </div>
    </div>
  );
}

export default Navigation;
