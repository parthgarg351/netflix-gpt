// export const LOGO =
//   "Netflix_Logo_PMS.png";


export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


// export const USER_AVATAR =
//   "avatar.png";


export const USER_AVATAR =
"https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

// export const BG_URL =
//   "Bg.jpg";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2IxNzZiODA1ZjM0Y2UyYzk4YWFmZWEyMmY4YzVjOCIsIm5iZiI6MTc0MDIxNzEwNC44NzUsInN1YiI6IjY3Yjk5YjEwNTVkZDgxMmZhZDQ2NTEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n1-GqNX3AG0mLZb5-4hTbLTKKe98BMvqMB5w3ou3tw0'
  }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";


export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const OPENAI_KEY = import.meta.env.VITE_OPEN_API;
