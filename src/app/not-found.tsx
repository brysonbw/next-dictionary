import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-black mx-auto text-center">
      <iframe
        title="404-giphy"
        src="https://giphy.com/embed/YrBRYRDN4M5ryrNOND"
        width="480"
        height="480"
        frameBorder="0"
        className="giphy-embed rounded-full mx-auto mb-5"
        allowFullScreen
      ></iframe>
      <p>
        <a
          href="https://giphy.com/gifs/Bounce-TV-yikes-whoops-my-bad-YrBRYRDN4M5ryrNOND"
          className="text-4xl"
        ></a>
      </p>
      <h4 className="text-4xl text-primary">404 Page Not Found</h4>
      <Link href="/">
        <p className="text-primary mt-4 hover:cursor-pointer hover:no-underline underline">
          back to homepage
        </p>
      </Link>
    </div>
  );
}
