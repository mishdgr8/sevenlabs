import Trial from "@/components/Trial";

// Your component logic here
export default function Page() {
  return (
    <main className="flex flex-col items-center max-h-screen mb-6 ">
      <div className="  text-center justify-between py-0 px-12 leading-7">
        <div>
          <Trial heading={"Join our team"} />
          <p className="mt-8">
            Join us to elevate your craft while building the platforms{" "}
          </p>
          <p>that define tomorrow's Solana landscape.</p>
        </div>
        <div className="my-6 text-2xl font-extrabold">
          <h3>Technical Roles</h3>
          <h3></h3>
        </div>
      </div>
      <div
        className=" card flex items-center justify-center border
       border-solid rounded-[20px]   max-w-fit"
      >
        <div className="flex flex-col w-[28rem] h-auto bg-dark p-6 text-white ">
          <h3 className="text-xl font-bold pb-2">Full Stack Developer</h3>
          <p className="">
            As a Full Stack Developer at SevenLabs, you will be working with our
            development team to develop and maintain applications,
            infrastructure and smart contracts for Solana projects and
            companies.
          </p>
        </div>
      </div>
    </main>
  );
}
