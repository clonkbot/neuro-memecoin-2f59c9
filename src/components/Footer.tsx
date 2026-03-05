export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-[#1a1a1f]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 text-xs md:text-sm font-mono">
          Requested by{' '}
          <a
            href="https://x.com/Neuroaibase"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#00d4aa] transition-colors"
          >
            @Neuroaibase
          </a>
          {' '}·{' '}
          Built by{' '}
          <a
            href="https://x.com/clonkbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff8c42] transition-colors"
          >
            @clonkbot
          </a>
        </p>
      </div>
    </footer>
  );
}
