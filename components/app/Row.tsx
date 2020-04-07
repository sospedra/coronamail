export const RowStyles: React.FC<{}> = () => (
  <style jsx global>{`
    .row {
      @apply flex flex-row w-full px-2 py-2 text-gray-900 border-t border-gray-300 cursor-pointer;
    }

    .row:last-child {
      @apply border-b;
    }

    .row:hover {
      @apply border-gray-400;
      box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
        0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
      z-index: 1;
    }
  `}</style>
)
