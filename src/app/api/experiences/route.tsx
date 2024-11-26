import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  try {
    const experienceDirectory = path.join(
      process.cwd(),
      "content",
      "experience",
    );
    const fileNames = fs.readdirSync(experienceDirectory);

    const experiences = await Promise.all(
      fileNames.map(async (filename) => {
        const filePath = path.join(experienceDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          title: data.title,
          company: data.company,
          year: data.year,
          tech: data.technologies,
          link: data.link,
          imageUrl: data.imageUrl,
          description: content,
        };
      }),
    );

    return new Response(JSON.stringify(experiences), {
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
