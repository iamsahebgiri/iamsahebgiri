import Link from "next/link";
import Container from "./container";

export default function Footer() {
  return (
    <footer className=" py-12 bg-white dark:bg-gray-900 dark:border-gray-700">
      <Container>
        <div className="flex justify-between">
          <div className="text-gray-500 flex space-x-3 ">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/blog">
              <a>Overthought</a>
            </Link>
            <Link href="/">
              <a>Project</a>
            </Link>
            <Link href="/">
              <a>About</a>
            </Link>
          </div>
          <div className="text-gray-500 flex space-x-3 ">
            <a href="https://github.com/iamsahebgiri">Github</a>
            <a href="https://www.linkedin.com/in/iamsahebgiri/">Linkedin</a>
            <a href="https://twitter.com/iamsahebgiri">Twitter</a>
            <a href="https://instagram.com/iamsahebgiri">Instagram</a>
            <a href="https://facebook.com/iamsahebgiri">Facebook</a>
            <a href="https://www.youtube.com/channel/UC9VTm-aiiHa4uUMWAgYtcHg">Youtube</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
