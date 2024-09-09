import Image from "next/image";
import Link from "next/link";
import ToggleDemo from "./toggle/page";
import MultiSelectDemo from "./fields/multiselect/page";
import InputFieldDemo from "./fields/inputfield/page";
import ErrorMessageDemo from "./error/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative"> 
      <main className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold">UI Components</h1>
        <h1 className="text-xl font-bold mb-4 flex items-center space-x-3">
          <Link href="https://nextjs.org/docs" className="text-blue-500 hover:underline">
            NextJS
          </Link>
          <span className="text-gray-400 text-sm">•</span>
          <Link href="https://www.typescriptlang.org/" className="text-blue-500 hover:underline">
            TypeScript
          </Link>
          <span className="text-gray-400 text-sm">•</span>
          <Link href="https://tailwindcss.com/docs/installation" className="text-blue-500 hover:underline">
            Tailwind
          </Link>
        </h1>
        <MultiSelectDemo/>
        <InputFieldDemo/>
        <ToggleDemo/>
        <ErrorMessageDemo/>
        <Link 
          href="https://github.com/christineRPM/nextjs-typscript-tailwind-ui-components"
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Link>
      </main>

      {/* Floating Try Nomikai Badge */}
      <a
        href="https://nomikai.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 flex flex-row z-50 transition-transform hover:scale-105 rounded-lg shadow-lg p-1"
      >
        <Image
          src="https://imagedelivery.net/dFIo1wWuUZtJiq57QrgKWw/5772d93d-7110-4931-4d73-cb63f2074f00/w=300,sharpen=3"
          alt="Try Nomikai"
          width={25}
          height={10}
          className=""
        /> Try Nomikai
      </a>
    </div>
  );
}