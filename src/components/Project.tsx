import i18n from '../utils/i18n';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineLink } from 'react-icons/md';

type Props = {
  project: {
    id: number;
    name: string;
    coverURL: string;
    description: { en: string; es: string };
    githubURLs: string[];
    previewURL: string;
    tools: string[];
  };
};

export default function Project({ project }: Props) {
  return (
    <div className="card">
      <div className="relative -mt-[35%] sm:-mt-0 md:-ml-[35%] w-full sm:w-1/2 md:w-8/12 shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:z-10">
        <img
          title={project.name}
          alt={project.name}
          src={project.coverURL}
          width={1200}
          height={630}
          placeholder="blur"
          className="lg:group-hover:scale-110 transition-all duration-300 backdrop-blur-xl bg-cover"
        />
      </div>

      <div className="flex flex-col justify-start gap-3">
        <h1 className="font-bold capitalize text-neutral-900">
          {project.name}
        </h1>
        <p className="text-sm text-gray-400 truncate-2">
          {i18n.resolvedLanguage === 'en'
            ? project.description.en
            : project.description.es}
        </p>

        <div className="flex items-center gap-1 flex-wrap">
          {project.tools.map((tool, index) => {
            return (
              <span
                key={`${tool}-${index}`}
                className="bg-gray-100 text-gray-500 rounded px-2 py-1 text-xs"
              >
                {tool}
              </span>
            );
          })}
        </div>

        <div className="mt-auto p-2 w-fit flex items-center gap-4">
          {project.githubURLs.map((repo) => (
            <a
              key={repo}
              title="Source Code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              href={repo}
              className="text-gray-500 hover:text-black"
            >
              <BsGithub className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
            </a>
          ))}

          {project.previewURL && (
            <a
              title="Live Preview"
              target="_blank"
              rel="noopener noreferrer"
              href={project.previewURL}
              className="text-gray-500 hover:text-black"
            >
              <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
