import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex space-x-2">
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`}>
            <button
              rel="previous"
              className="flex hover:text-primary-500 dark:hover:text-primary-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
          </Link>
        )}

        <span>
          {currentPage} of {totalPages}
        </span>

        {nextPage && (
          <Link href={`/page/${currentPage + 1}`}>
            <button rel="next" className="flex hover:text-primary-500 dark:hover:text-primary-400">
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
