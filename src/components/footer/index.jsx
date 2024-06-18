import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-200 py-10 mt-5">
      <div className="container px-4 max-w-3xl m-auto items-center py-5">
        <div className="border-b border-b-slate-500 py-5">
          <div className="flex justify-between">
            <div className="flex flex-col font-semibold gap-3">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <p className="mb-2">Download our app</p>
              <div className="flex gap-2 border px-3 py-1 rounded-md items-center">
                <img src="/public/images/playstore.png" alt="" />
                <div className="font-semibold">
                  <p className="text-sm uppercase">Get it on</p>
                  <p>Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-slate-300 pt-4">
          &copy; 2024 Digital Dispatch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
