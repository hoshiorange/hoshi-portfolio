import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <Image
        src="/profile-picture.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full mb-4"
      />
      <p className="text-xl mb-4">Hi, I am @hoshiorange.</p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/hoshiorange"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}
