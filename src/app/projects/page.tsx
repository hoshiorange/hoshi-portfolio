import { ExternalLink } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => (
  <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2 flex items-center">
      {title}
      <a href={url} target="_blank" rel="noopener noreferrer" className="ml-2">
        <ExternalLink className="h-4 w-4" />
      </a>
    </h3>
    <p>{description}</p>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "プロジェクト1",
      description:
        "これは私の最初のプロジェクトです。XXXを使用して開発しました。",
      url: "https://project1.com",
    },
    {
      title: "プロジェクト2",
      description:
        "2つ目のプロジェクトです。YYYの問題を解決するために作成しました。",
      url: "https://project2.com",
    },
    // 他のプロジェクトを追加
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
