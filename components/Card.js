export default function BookCard(props) {

  const { title, author } = props.item;

  return (
    <div className="m-6 w-32 h-52 sm:w-44 sm:h-72 text-start shadow-xl overflow-scroll rounded-2xl bg-gray-100 flex flex-col">
        <div className='flex flex-grow text-start bg-yellow-200 overflow-hidden'>
            <img src='https://picsum.photos/200/200' />
        </div>
        <div className='flex flex-col text-start px-3 py-2 overflow-scroll'>
            <p className="text-black text-base font-semibold">
            {title}
            </p>

            <p className="text-gray-800 text-base font-thin">
            {author}
            </p>
        </div>

    </div>
  )
}