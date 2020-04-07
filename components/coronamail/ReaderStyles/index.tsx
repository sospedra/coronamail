const ReaderStyles: React.FC<{}> = () => (
  <style jsx global>{`
    .viewer {
      @apply text-lg leading-snug flex-1 flex flex-col;
    }
    @screen md {
      .viewer {
        @apply text-lg flex flex-col mx-4;
        height: calc(100% - 2rem);
      }
    }
    .viewer .pell-content {
      @apply flex flex-col flex-1 pb-4;
    }
    @screen md {
      .viewer .pell-content {
        @apply flex flex-col flex-1 p-4;
      }
    }

    .viewer > * + *,
    .viewer li + li,
    .viewer li > p + p {
      @apply mt-1;
    }
    .viewer strong {
      @apply font-bold;
    }
    .viewer a {
      @apply text-blue-500 underline;
    }
    .viewer a:hover {
      @apply text-blue-600 cursor-pointer;
    }
    .viewer strong {
      @apply font-bold;
    }
    .viewer h1 {
      @apply leading-tight text-xl font-bold my-2;
    }
    .viewer h2 {
      @apply leading-tight text-lg font-bold my-1;
    }
    .viewer code {
      @apply font-mono text-sm inline bg-gray-400 px-1;
    }
    .viewer pre code {
      @apply block bg-black p-4 rounded;
    }
    .viewer blockquote {
      @apply border-l-4 border-gray-400 pl-4 italic;
    }
    .viewer ul,
    .viewer ol {
      @apply pl-5 list-inside;
    }
  `}</style>
)

export default ReaderStyles
