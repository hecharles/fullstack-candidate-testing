export function Loader() {
  return (
    <div
      className="fixed z-30 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-2xl sm:p-6">
          <div className="flex">
            <div
              className={`h-2.5 w-2.5 bg-blue-500 rounded-full mr-1 animate-bounce`}
            ></div>
            <div
              className={`h-2.5 w-2.5 bg-blue-500 rounded-full mr-1 animate-bounce200`}
            ></div>
            <div
              className={`h-2.5 w-2.5 bg-blue-500 rounded-full animate-bounce400`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
