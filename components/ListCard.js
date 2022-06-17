import Link from './Link'
import Tag from './Tag'
import formatDate from '@/lib/utils/formatDate'

const Card = ({ slug, date, title, summary, tags }) => (
  <li
    key={slug}
    className="rounded-xl  border border-gray-100 bg-white p-4 py-4 text-gray-900  shadow-sm transition-shadow hover:shadow-lg focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
  >
    <article className="block h-full w-full md:grid md:grid-cols-5">
      <dl className="md:col-span-2 xl:col-span-1">
        <dt className="sr-only">Published on</dt>
        <dd className="text-medium h-full font-medium leading-6 text-gray-500 dark:text-gray-400  md:ml-4">
          <time dateTime={date}>{formatDate(date)}</time>
        </dd>
      </dl>
      <div className="mr-4 space-y-4 md:col-span-3 xl:col-span-4">
        <div>
          <h3 className="text-2xl font-semibold leading-8 tracking-tight ">
            <Link
              href={`/${slug}`}
              className="text-gray-900 duration-100 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400 "
            >
              {title}
            </Link>
          </h3>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
        <div
          style={{ fontSize: '1em' }}
          className="prose hidden max-w-none text-xs text-gray-500 dark:prose-dark dark:text-gray-400 md:block"
        >
          {summary}
        </div>
        <div className="text-base font-medium leading-6 text-gray-500">
          <Link
            href={`/${slug}`}
            className="hover:text-primary-500  dark:hover:text-primary-400"
            aria-label={`Read "${title}"`}
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </article>
  </li>
)

export default Card
