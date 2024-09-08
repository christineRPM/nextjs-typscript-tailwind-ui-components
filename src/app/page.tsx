import Image from "next/image";
import Link from "next/link";
import MultiSelect from "./fields/multiselect";
import InputFieldDemo from "./fields/inputfield";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative"> 
      <main className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold">Components</h1>
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
        
        <section className="w-2/3 flex flex-col border rounded-xl p-5 shadow shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">MultiSelectInput Component</h2>
          <p className="mb-4">
            The MultiSelectInput component is a customizable dropdown that allows users to select multiple options from a list.
            It supports creating new options on the fly and uses react-select for a smooth user experience.
          </p>
          <div className="border-t pt-5 mb-4">
            <MultiSelect />
          </div>
          <p className="text-sm text-gray-600">
            Try selecting multiple options or creating a new option!
          </p>
        </section>

        <section className="w-2/3 flex flex-col border rounded-xl p-5 shadow shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">InputField Component</h2>
          <p className="mb-4">
            The InputField component is a versatile input element with support for various states and styling options.
            It includes label, placeholder, and different visual states.
          </p>
          <div className="border-t pt-5 mb-4">
            <InputFieldDemo />
          </div>
          <p className="text-sm text-gray-600">
            Try typing in the input fields to see it in action!
          </p>
        </section>

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