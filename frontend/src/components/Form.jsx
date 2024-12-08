function Form() {
  return (
    <>
      <p className="text-lg text-center mb-10">
        Add your patients and {''}
        <span className="text-indigo-600 font-bold">manage them</span>
      </p>

      <form className="bg-white py-10 px-5 mb-10 md:mb-0 shadow-md rounded-md">
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="text-gray-400 uppercase font-bold"
          >
            Pet Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Your pet's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="text-gray-400 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Pet owner name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-gray-400 uppercase font-bold"
          >
            Owner Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Owner email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="discharge-date"
            className="text-gray-400 uppercase font-bold"
          >
            Discharge date
          </label>
          <input
            id="discharge-date"
            type="date"
            placeholder="pet discharge date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="text-gray-400 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="pet symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <input
          type="submit"
          value="Add Patient"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
        />
      </form>
    </>
  );
}

export default Form;
