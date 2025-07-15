import React, { useState } from "react";
import { Allblogs } from "../assets";
import Blogcard from "../ui/Blog/Blogcard";
const Blogs = () => {
  const [Blowtoshow, setBlowtoshow] = useState({
    start: 0,
    end: 4,
  });
return (
    <div className="w-full h-full lg:col-span-2 max-w-2xl px-4 mx-auto flex flex-col gap-6">
        {Allblogs.slice(Blowtoshow.start, Blowtoshow.end + 1).map((item, key) => (
            <Blogcard key={Blowtoshow.start + key} index={key} item={item} />
        ))}
    </div>
);
};

export default Blogs;
