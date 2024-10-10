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
      <div className=" h-auto w-auto pt-10 flex-wrap flex justify-around px-14 ">
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

      {/* new section start here */}
      <div className="h-auto w-auto bg-gray-50 mt-20 pb-20 flex ">
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
          <img
            className=" h-6/6 w-full"
            src="https://pwskills.com/images/homePage/homepage-degree.webp"
            alt=""
          />
        </div>
      </div>
      {/* new section ends here */}


{/* big card section starts here */}
      <div className="h-full w-full pb-20 bg-white">
        <div className="pt-10 pl-20  h-auto w-full">
          <p className="font-bold text-4xl mb-3">Explore Our Categories</p>
          <p className="font-semibold text-slate-700 ">Discover your passion</p>
        </div>
        <div className="pl-20 pr-20">
          <div className=" pt-8  flex  flex-wrap   justify-between">
            <div className="bg-purple-100 shadow-xl h-auto space-y-4 w-[370px]  rounded-lg">
              <div className="flex justify-between pr-3">
                <div className="p-3 pt-4">
                  {" "}
                  <p className="font-bold  mb-3 text-md">
                    Data Science & Analytics
                  </p>
                  <p className="text-sm ">
                    Become an expert at drawing <br />
                    intellignece from dataa and get...
                  </p>
                </div>
                <div className="pt-8 ">
                  {" "}
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/bc14c559-783f-4f78-b7a7-7a638810c7da.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white p-3  flex justify-between items-center">
                <p className="text-sm">Know more</p>
                <div className="w-7">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="bg-purple-100 shadow-xl h-auto space-y-4 w-[370px]  rounded-lg">
              <div className="flex justify-between pr-3">
                <div className="p-3 pt-4">
                  {" "}
                  <p className="font-bold  mb-3 text-md">
                    Software Development Courses
                  </p>
                  <p className="text-sm ">
                    Upskill in-demand software & <br /> technology skills to
                    attain desired
                  </p>
                </div>
                <div className="pt-8 w-16">
                  {" "}
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/e6cac10c-85fd-4315-9def-48aa3094a3e9.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white p-3  flex justify-between items-center">
                <p className="text-sm">Know more</p>
                <div className="w-7">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="bg-purple-100 shadow-xl h-auto space-y-4 w-[370px]  rounded-lg">
              <div className="flex justify-between pr-3">
                <div className="p-3 pt-4">
                  {" "}
                  <p className="font-bold  mb-3 text-md">Banking and Finance</p>
                  <p className="text-sm ">
                    Up-skill yourself with relevant <br /> courses to become job
                    ready in
                  </p>
                </div>
                <div className="pt-8 w-16">
                  {" "}
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/7362227c-33fe-4113-955f-d616e8e87a04.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white p-3  flex justify-between items-center">
                <p className="text-sm">Know more</p>
                <div className="w-7">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAACmpqa0tLT09PS5ublLS0uamprl5eX4+PjW1tbZ2dnr6+svLy/y8vLKysp9fX1nZ2fh4eGdnZ2IiIjPz880NDS9vb3Dw8NtbW1gYGAoKCiRkZFAQEAcHBxWVlZYWFhzc3M8PDwWFhaDg4Orq6sZGRlFRUUQEBCMjIxOTk75+GMcAAAGsUlEQVR4nO2diX7pTBiHLbE2FK0i1Hbao3X/F/hJ8RWTSN59nN88F4C/TGbefSqVQCAQCAQCgUAgEAgEAoFAIBAI6NEeT+uLwXC1b+52zf1qPRy06tNxbP2zWIimtVmvmsd8WJv2rX8inmhUm/3JFXfBrNV9QJlxYzYvo+7En6T2ZP2TIcS1d4C6M2/fXesfXo7oEyPv9ChbbeufX8h4g5Z3ZDXpWGu4R31H1JcyX/h6jHRaDPKODHxcrP0Fm76UZGQt6IbOC6u+lI1Xz/FzyS7wwMCbPaf7JqEv5dNa2g/9jZS+A9uxtbxKpfElKPDAh/FSjYay+g7MTR/jVFxfyoeZvs6HisBqdWd0cMQcJlpJGhYCn/X0HXjVF8hnhJYjiZQFbpQFVqs93ZexqS7wgGKco58fPRNlqiWwLWJnl6GuJNBKn5ZES4EqEkemAhUkxqWi2JIIbzcdSCBbCNlDY2stL0Xy6Jf3BsswlzPgXq21nVhLCaxbK/sfIZ/4yVrXBSJnRt+DbfQXiZC4H7vMmR2/wE9rTTewO/3WxpoLd5ARn9eVYs4bKuZPLdFhXaf+rdEUzsIGk7BMIYz7acNaSw58yTdrJblwCdRKT8D55hFoG5i5D4+ruLGWcYcBh0A/T4ozHMVFflnct2zoAn1+C1PoD3FmLaEA8nbq+yOsVqkG+Le1gEJqNIGRWZqpNO80hb559lnQXGE/nYprSAeG6Gk/bz21R3WG4AElBC65z5xrK+mVt5RiGwYhefyeYzXqR63wAsccUrLZX3wNWSJ+mQo6hldJQKpEfIxfLo7/dv1FRIkJVmCXR00Wt34dTeIXdpkKlq456TGaxGekwhWTnAz2zpeRJCKDwzGXnCxct44i0f3DSiF4VmRuDhSJOD+Yt83nlharRNyLuOaTkwWrxAVKIaOaTDglok5E+fgFp0SMQoV0DKNETDO4Rqn6C5tEzFYjvNEcydghcBIx8SidGBTXU8QkMLi15MD0LjbhAtUSMjwSv+AKRW22K3gkwhXqNN79wCIRnivVjAVz7Kjw0hNoILE54Z3AApUIPxAHsC/gbxAESpyAvwCWN5SYuwKTCI+3gUwamb55UFk53KjZAz59KSAvBaIQ7iFCsk4Z2z0LkCgDPBgFUSjVqDMB/AZ4+T6kUVuqTwcSkoYr9OEZQuwquELITvOY7yEk4P2Ye+mjnYcZrnQB9jYNzPaH/8nA7Ci/XQp0buB2KTTUtmf2LaCNcvD9XLMV792tTQNHa+F1Q4o+/t4VCLFmjsCb2fTiNBlPEPH3wksURfOjl2zd78aMvgELVIuX7tw/HyPwLUNBEToto1t3B0a9H0OEQpUK9qVbJ4KrcYGbNDoNeT33CSL7qTEWB3zDBtNzCwywVUqYzmf5zfSvKxCdLUEIVNhMXYHozDoi9XQg4VTjsnQzDfh8F64oSjbN/eW+OaO/6E/D1V8KliZWs/IMMSHrjOvS60tOJnUrlyk72xbZOCNZq+Asq5hiQ2EbEiTP/NuwR0yaRYyNMEiOa7lxWDu0KX7oFj3B4YHXqSLigC18Y75grf6VVxgRG2cwZvcRST//IjbWoXZXETq6WbTk8HviU1ufeniBsv2Vp/hfTO7tovRYyg6/SiajdpfhTyQ1Oz9C/yG6Y+aHR+ghpWUvRW1THqjTlPyda3IGV6b/i99TMVLIQxWEPX0y9MEYsn4wHYbxgoIdbAzQjoojfj9EllIen99ETLrCxae5pbcwVWNtrHXkwjIm6kDfWkgubCOTtW/rKAvet3cwuu2hAEzeNw/dO2XKwjqjFVi5rwLXNnOk4980pSXzdWX+rVPsHIVcfFunvGv0B79mJRMnfGXily8sck2pPxcHiN3F4svlD4L3Baq0d5eAMPqqgMgP603wjhK9ksy7iF4x54M3LHzBnL1tI369nEJB310U7uu0PRZVrpaznLKvdD2g3UJVu1LWartRu8PSygoXsbbziPWtm4ySaVEi7Vj/Wvs+YG1Pg+kmCxiap4bJvdyVSlsrsLFT3WOu0FmpYv5uGcbycdQl9/VjQDrSUcYP5sAvgjGpfrmAN+MHeEKuHpwxfUYj2ojo2+gf8vl0+bsVh8LRCjBdyKiQYtYSUxqoPPGZqt49vzOjAce95F8fouFCIhH5Ro7dJ+/0CQFGlCnZr74uzxueXzEO8nzAntaVpNtKQAXU64WPm2cB/XGr3Bif9eLZ+3cvn3jykuS3bS2Tl4bPG2d54vG00RrMklUzZZXMBq36dPxvaAsEAoFAIBAIBAKBQCAQCAQCgUfhP/U5hjQCH9tGAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" pt-8  flex flex-wrap  justify-between">
            {/* card 1 */}
            <div className="bg-purple-100 shadow-xl h-auto space-y-4 w-[370px]  rounded-lg">
              <div className="flex justify-between pr-3">
                <div className="p-3 pt-4">
                  {" "}
                  <p className="font-bold  mb-3 text-md">Programming Courses</p>
                  <p className="text-sm ">
                    Build strong coding foundations for <br /> a high-paying
                    technology career
                  </p>
                </div>
                <div className="pt-8 w-16 ">
                  {" "}
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/8ea260a4-61a7-44de-940c-b242b2584872.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white p-3  flex justify-between items-center">
                <p className="text-sm">Know more</p>
                <div className="w-7">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="bg-purple-100 shadow-xl h-auto space-y-4 w-[370px]  rounded-lg">
              <div className="flex justify-between pr-3">
                <div className="p-3 pt-4">
                  {" "}
                  <p className="font-bold  mb-3 text-md">
                    Business & Technology
                  </p>
                  <p className="text-sm ">
                    Explore the vast area of new <br /> categories under
                    Business
                  </p>
                </div>
                <div className="pt-8 w-16">
                  {" "}
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/7cf6e398-9b29-40d6-a0f8-dad29ccd13e1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white p-3  flex justify-between items-center">
                <p className="text-sm">Know more</p>
                <div className="w-7">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="bg-purple-100 shadow-xl h-auto space-y-4 w-[370px]  rounded-lg">
              <div className="flex justify-between pr-3">
                <div className="p-3 pt-4">
                  {" "}
                  <p className="font-bold  mb-3 text-md">
                    PW School of Health and Care
                  </p>
                  <p className="text-sm ">
                    Explore the vast sector <br /> of Healthcare by Joining our
                    Degree...
                  </p>
                </div>
                <div className="pt-8 w-16">
                  {" "}
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/81e68818-4ecc-4e0f-9055-29e9cfafc668.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white p-3  flex justify-between items-center">
                <p className="text-sm">Know more</p>
                <div className="w-7">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
