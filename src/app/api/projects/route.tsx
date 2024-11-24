import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getRepositoryStars(user: string, repo: string) {
  const response = await fetch(`https://api.github.com/repos/${user}/${repo}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    console.error(`Failed to fetch stars for ${user}/${repo}`);
    return 0;
  }

  const githubRepoData = await response.json();
  return githubRepoData?.stargazers_count;
}

export async function GET() {
  try {
    const projectsDirectory = path.join(process.cwd(), "content", "projects");
    const fileNames = fs.readdirSync(projectsDirectory);

    const projects = await Promise.all(
      fileNames.map(async (filename) => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        const stargazers = await getRepositoryStars(data.user, data.repository);

        return {
          title: data.title,
          tech: data.technologies,
          user: data.user,
          repository: data.repository,
          stargazers,
          description: content,
          imageUrl: data.imageUrl,
          link: data.link,
          status: data.status,
        };
      }),
    );

    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching project data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
    });
  }
}
