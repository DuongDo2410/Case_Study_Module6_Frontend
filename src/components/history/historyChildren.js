function ListItem(props) {
    console.log(props.history)
    let startDay = new Date(props.history.startDay).toLocaleDateString();
    let endDay = new Date(props.history.endDay).toLocaleDateString();
    return (
        <article className="flex items-start space-x-6 p-6">
            {/*<img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/310372647_490865529722508_7492707909330717217_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZwTxnlTbj_AAX-zLlZD&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9GaDGrfhmd25P5OjktdKknbJX_o7iBb2E4FJOnVL-4mw&oe=6343A40F" alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />*/}
            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20 mr-5 flex justify-start">{props.history.idHome.name}</h2>
                <dl className="mt-2 flex flex-wrap justify-start text-sm leading-6 font-medium">
                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                        <dt className="text-sky-500 flex">
                            <span className="sr-only">Star rating</span>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                        </dt>
                    </div>
                    <div>
                        <dt className="sr-only">Rating</dt>
                    </div>
                    <div className="ml-2">
                        <dt className="sr-only">Year</dt>
                        <dd>{startDay}-{endDay}</dd>
                    </div>
                    <div>
                        <dt className="sr-only">Genre</dt>
                        <dd className="flex items-center">
                            <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            {props.history.idHome.typeRoom}
                        </dd>
                    </div>
                    <div>
                        <dt className="sr-only">Runtime</dt>
                        <dd className="flex items-center">
                            <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            {props.history.idHome.amountBedroom} phòng ngủ, {props.history.idHome.amountBathroom} phòng tắm
                        </dd>
                    </div>
                    <div className="flex-none w-full mt-2 font-normal flex flex-wrap justify-start">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate">10000{props.history.totalMoney} VND</dd>
                    </div>
                </dl>
            </div>
        </article>
    )
}
export default ListItem;