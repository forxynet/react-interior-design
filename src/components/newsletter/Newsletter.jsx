
export default function Newsletter() {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <h1 className="text-3xl font-bold font-serif text-center">
        Subscribe to our Newsletter
      </h1>
      <p className="max-w-[300px] mx-auto text-gray-500 text-sb text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam doloremque error assumenda!
      </p>
      {/* Form here */}
      <div className="!mt-10 flex justify-center w-full">
        <input
          type="text"
          placeholder="Enter your email."
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        <button
          className="bg-black text-white px-6 py-4 uppercase"
        >Subscribe</button>
      </div>
    </div>
  )
}
