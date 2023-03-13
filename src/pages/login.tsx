import Footer from "../components/Footer";
import Image from "next/image";
function login() {
  return (
    <div className="flex flex-col justify-between mx-auto">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col border border-gray-200 p-10 mt-10 text-center">
          <div className="flex flex-row justify-center mb-10">
            <Image
              src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
              width={160}
              height={160}
              alt="Instagram logo"
            />
          </div>
          <input
            type="text"
            className="input"
            placeholder="Username or email address"
          />
          <input type="password" className="input" placeholder="Password" />
          <button className="text-white bg-blue-400 rounded-lg text-md px-32">
            Log In
          </button>
          <p className="footerLink text-blue-700 mt-5">
            Forgotten your password?
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="border border-gray-200 px-24 flex flex-row justify-center py-2">
          <p className="text-sm">Dont have an acount? </p>
          <p className="text-sm text-blue-700">Sign up</p>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <p className="text-xs">Get the app.</p>
        <div className="flex flex-row justify-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            width={120}
            height={120}
            alt="App store download"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            width={120}
            height={120}
            alt="Google play download"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default login;
