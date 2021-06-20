export function Footer() {
  return (
    <div className="bg-white overflow-hidden shadow w-full p-4">
      <div className="md:flex">
        <div className="md:w-1/2 mb-4">
          <div className="text-xl font-bold text-gray-900">About Us</div>
          <div className="text-gray-900 mt-4">
            {
              "We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that the love"
            }
          </div>
          <div className="text-gray-900 mt-4">
            {"All copyrights reserved © 2020 - Health Explorer"}
          </div>
        </div>
        <div className="md:w-1/4 mb-4 ml-4">
          <div className="text-xl font-bold text-gray-900">Sitemap</div>
          <div className="flow-root mt-6">
            <ul className="-my-5">
              <li className="mt-2">
                <button
                  type="button"
                  className="text-base text-gray-900 hover:text-blue-500 focus:outline-none"
                >
                  Nurses
                </button>
              </li>
              <li className="mt-2">
                <button
                  type="button"
                  className="text-base text-gray-900 hover:text-blue-500 focus:outline-none"
                >
                  Employers
                </button>
              </li>
              <li className="mt-2">
                <button
                  type="button"
                  className="text-base text-gray-900 hover:text-blue-500 focus:outline-none"
                >
                  Social Network
                </button>
              </li>
              <li className="mt-2">
                <button
                  type="button"
                  className="text-base text-gray-900 hover:text-blue-500 focus:outline-none"
                >
                  Jobs
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/4 mb-4">
          <div className="text-xl font-bold text-gray-900">Privacy</div>
          <div className="flow-root mt-6">
            <ul className="-my-5">
              <li className="mt-2">
                <button
                  type="button"
                  className="text-base text-gray-900 hover:text-blue-500 focus:outline-none"
                >
                  Terms of user
                </button>
              </li>
              <li className="mt-2">
                <button
                  type="button"
                  className="text-base text-gray-900 hover:text-blue-500 focus:outline-none"
                >
                  Privacy policy
                </button>
              </li>
              <li className="mt-2">
                <button
                  type="button"
                  className="text-base text-gray-900 hover:text-blue-500 focus:outline-none"
                >
                  Cookie policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
