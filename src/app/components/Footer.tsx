import Github from '@/assets/icons/Github';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center mt-auto text-xs">
      <div className="mt-16 flex flex-col items-center">
        {/** GitHub Icon Repo Link */}
        <a
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:no-underline"
          target="_blank"
          href="https://github.com/brysonbw/next-dictionary"
        >
          <Github className="w-8 h-8" />
        </a>

        <div className="mb-2 mt-2 flex space-x-2 text-sm text-[#18181B] dark:text-gray-400">
          <div>
            Powered By {''}
            <span className="ml-[.1em]">
              <a
                className="text-black hover:underline"
                target="_blank"
                href="https://nextjs.org/"
              >
                Next
              </a>
            </span>
            <svg
              viewBox="0 0 128 128"
              className="inline-block h-5 w-5 ml-[.4em] mb-1"
            >
              <circle cx="64" cy="64" r="64"></circle>
              <path
                fill="url(#a)"
                d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
              ></path>
              <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
              <defs>
                <linearGradient
                  id="a"
                  x1="109"
                  x2="144.5"
                  y1="116.5"
                  y2="160.5"
                  gradientTransform="scale(.71111)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="121"
                  x2="120.799"
                  y1="54"
                  y2="106.875"
                  gradientTransform="scale(.71111)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>•</div>
          <div>©{new Date().getFullYear()}</div>
          <div>•</div>
          <Link className="hover:underline no-underline" href="/">
            Dictionary
          </Link>
        </div>
      </div>
    </footer>
  );
}
