import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getPostSlugs(directory) {
  const postsDirectory = join(process.cwd(), directory);
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(postsDirectory, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(postsDirectory, fields) {
  const slugs = getPostSlugs(postsDirectory);
  console.log();
  const posts = slugs.map((slug) =>
    getPostBySlug(postsDirectory, slug, fields)
  );
  return posts;
}
