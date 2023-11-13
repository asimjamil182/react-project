
const HotProduct = () => {
    return (
        <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
            <div class="container relative flex px-6 py-16 mx-auto">
                <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                    <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
                    </span>
                    <h1 class="flex flex-col text-6xl leading-none text-gray-800 uppercase sm:text-8xl dark:text-white text-color2">
                        Be on
                        <span class="text-5xl sm:text-7xl">
                            Time
                        </span>
                    </h1>
                    <p class="text-sm text-gray-700 sm:text-base dark:text-white">
                        Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                    </p>
                    <div class="flex mt-8">
                        
                        <a href="#" class=" uppercase border-2 border-color2 rounded-full py-2 px-5 text-secondary bg-color2 mr-4">
                            Add to card
                        </a>
                        <a href="#" class=" uppercase border-2 border-color2 rounded-full py-2 px-5 text-color2">
                            Read more
                        </a>
                    </div>
                </div>
                <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                    <img src="https://placehold.co/300" class="max-w-xs m-auto md:max-w-sm" />
                </div>
            </div>
        </div>

    )
}

export default HotProduct;