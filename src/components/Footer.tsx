function Footer() {
  return (
    <div className="w-screen flex flex-col items-center text-gray-400 my-5">
      <div>
        <div className="flex mb-1">
          <p className="footerLink">Meta</p>
          <p className="footerLink">About</p>
          <p className="footerLink">Blog</p>
          <p className="footerLink">Jobs</p>
          <p className="footerLink">Help</p>
          <p className="footerLink">Api</p>
          <p className="footerLink">Privacy</p>
          <p className="footerLink">Terms</p>
          <p className="footerLink">Top accounts</p>
          <p className="footerLink">Locations</p>
          <p className="footerLink">Instagram Lite</p>
          <p className="footerLink">Contact uploading and non-users</p>
        </div>
        <div className="flex flex-row justify-center mb-3">
          <p className="footerLink">Digital Colletcibles</p>
          <p className="footerLink">Privacy Notice</p>
          <p className="footerLink">Meta Verified</p>
        </div>
      </div>
      <div className="flex">
        <p className="text-xs px-1">English (UK)</p>
        <p className="text-xs px-1">2023 Instagram from Meta</p>
      </div>
    </div>
  );
}

export default Footer;
