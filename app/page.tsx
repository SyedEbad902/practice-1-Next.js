import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-white">
      {/* Navbar starts here */}

      <nav>
        <div className=" shadow-md h-[70px] flex place-content-evenly w-full  p-4">
          <div className="  flex min-w-300">
            <img
              className="w-13 h-10 pl-5"
              src="https://i.pinimg.com/originals/8e/23/a2/8e23a255af007c366bc1c75ab4850942.png"
              alt=""
            />
            <p className="pl-1 pt-2 font-bold  text-1xl">SKILLS</p>
          </div>

          <div className="">
            <select
              className="w-36 h-10  bg-gray-100 rounded-sm "
              name="cars"
              id="cars"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>{" "}
          </div>
          <div className="  w-[400px] p-2 pr-10">
            <ul className=" place-content-between flex">
              <li className="font-semibold text-sm">Online Degree</li>
              <li className="font-semibold text-sm">PW 101</li>
              <li className="font-semibold text-sm">Masterclass</li>
            </ul>
          </div>

          <div>
            <input
              className=" h-11 w-64 bg-gray-200 rounded-sm p-2"
              type="search "
              placeholder="Search Courses"
            />
          </div>
          <div>
            <button className="border-2  h-11 border-orange-400 rounded-lg w-36 ">
              <p className="text-orange-400 font-bold ">Login/Register</p>
            </button>
          </div>
        </div>
      </nav>
      {/* navbar ends here */}

      {/* hero section starts here */}
      <div className="w-full h-auto flex justify-between ">
        <div className="pt-32 pl-20 w-1/2">
          <p className="font-bold text-4xl mb-4">Stay Ahead Of The Curve</p>
          <p className="font-bold text-4xl mb-4">With Our AFFORDALE </p>
          <p className="font-bold text-4xl">Courses</p>
          <p className=" mt-8 text-slate-600">
            PW Skills is your one-stop-shop for upscaling. Get maximum value for
            time <br />
            and resources you invest, with job-ready courses & high-technology,{" "}
            <br />
            available at the lowest cost.
          </p>
          <button className="h-12 border-2 rounded-lg bg-orange-500 w-48 text-white mt-8">
            Eplore Courses
          </button>
        </div>
        <div className="m-2 w-1/2">
          <img
            className="bg-cover "
            src="https://thumbs.dreamstime.com/b/education-word-cloud-19119234.jpg"
            alt=""
          />
        </div>
      </div>
      {/* hero section ends here */}

      {/* card section starts here */}
      <div className=" h-auto w-auto pt-10 flex justify-around px-14 ">
        <div className="flex bg-slate-200 shadow-lg p-3 rounded-md w-64">
          <div>
            <img
              src="https://pwskills.com/images/homePage/statistics1.png"
              alt=""
            />
          </div>
          <div className="ml-2">
            <p className="font-bold text-lg">55%</p>
            <p>Average Salary Hike</p>
          </div>
        </div>
        <div className="flex bg-slate-200 shadow-lg p-3 rounded-md w-64">
          <div>
            <img
              src="https://pwskills.com/images/homePage/statistics2.png"
              alt=""
            />
          </div>
          <div className="ml-2">
            <p className="font-bold text-lg">55%</p>
            <p>Average Salary Hike</p>
          </div>
        </div>
        <div className="flex bg-slate-200 shadow-lg p-3 rounded-md w-64">
          <div>
            <img
              src="https://pwskills.com/images/homePage/statistics3.png"
              alt=""
            />
          </div>
          <div className="ml-2">
            <p className="font-bold text-lg">12000+</p>
            <p>Career Transition</p>
          </div>
        </div>
        <div className="flex bg-slate-200 shadow-lg p-3 rounded-md w-64">
          <div>
            <img
              src="https://pwskills.com/images/homePage/statistics1.png"
              alt=""
            />
          </div>
          <div className="ml-2">
            <p className="font-bold text-lg">55%</p>
            <p>Average Salary Hike</p>
          </div>
        </div>
      </div>
      {/* card section end s here */}
      <div className="h-auto w-auto bg-gray-50 mt-20 mb-20 flex ">
        <div className="pt-32 pl-20 w-1/2">
          <p className="font-bold text-lg mb-8">Online Degree</p>
          <p className="font-bold text-6xl mb-4">Where Learning</p>
          <p className="font-bold text-6xl mb-4">Meets The</p>
          <p className="font-bold text-6xl mb-4">Expectation</p>
          <p className="text-slate-600 font-bold text-lg mt-10">
            At PW Skills, we are Revolutionising your <br />
            journey of stepping your first foot into your <br />
            Career through our college programs with <br />
            partnering up with Top Tier Colleges
          </p>
          <button className="h-12 border-2 rounded-lg bg-orange-500 w-48 text-white mt-8">
            Eplore Courses
          </button>
          <button className="h-12 border-2  rounded-lg border-orange-500 w-56 text-orange-500 mt-8 ml-5 ">
            <p className="flex justify-center ">
              {" "}
              Talk to counsellor{" "}
              <img
                className="ml-3"
                src="https://pwskills.com/_next/static/media/call.0887f2c7.svg"
                alt=""
              />
            </p>
          </button>
        </div>

        <div className="w-1/2 pt-20 pr-7"> 
          <img className=" h-6/6 w-full"
            src="https://pwskills.com/images/homePage/homepage-degree.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
