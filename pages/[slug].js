import MiscLayout from "../components/miscLayout";
import { getAllPosts, getPostBySlug } from "../lib/pages";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
export default function Misc({ post }) {
  return (
    <MiscLayout>
       <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
        id="coc"
      >
        {post.title}
      </h1>
     <ReactMarkdown className="content">{post.content}</ReactMarkdown>
    </MiscLayout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug("_pages-content", params.slug, ["title", "slug", "content"]);
  const content = post.content;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts("_pages-content", ["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
