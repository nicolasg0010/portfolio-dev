import { navSections } from '../utils/utils';

export default function MobileMenu() {
  const sectionsBtn = navSections.map((section) => (
    <button
      key={section}
      className="border-b border-gray-300 text-gray-900 font-semibold flex w-auto py-4 capitalize text-xl cursor-pointer"
    >
      {section}
    </button>
  ));

  return (
    <div className="bg-white text-black fixed h-screen w-full sm:hidden">
      <div className=" flex flex-col mt-28 mx-8 gap-5">{sectionsBtn}</div>
    </div>
  );
}
