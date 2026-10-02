import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="h-17.5 relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        
    <a href="/" class="text-(--dark-blue)">
        <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/">
            <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </a>

    <ul class="md:flex hidden items-center gap-10 size-small">
        <li><a class="hover:text-(--dark-blue) transition" href="#">Create</a></li>
        <li><a class="hover:text-(--dark-blue) transition" href="#">File Report</a></li>
        {/* <li><a class="hover:text-(--dark-blue) transition" href="#">Portfolio</a></li> */}
        {/* <li><a class="hover:text-(--dark-blue) transition" href="#">Pricing</a></li> */}
    </ul>

    <button type="button" class="bg-white border border-black md:inline hidden size-small hover:bg-(--light-blue) hover:text-white active:scale-95 transition-all w-40 h-11">
        Profile
    </button>

    {/* <button aria-label="menu-btn" type="button" class="menu-btn inline-block md:hidden active:scale-90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
    </button> */}

    {/* <div class="mobile-menu absolute top-17.5 left-0 w-full bg-white p-6 hidden md:hidden">
        <ul class="flex flex-col space-y-4 text-lg">
            <li><a href="#" class="text-sm">Home</a></li>
            <li><a href="#" class="text-sm">Services</a></li>
            <li><a href="#" class="text-sm">Portfolio</a></li>
            <li><a href="#" class="text-sm">Pricing</a></li>
        </ul>

        <button type="button" class="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
            Get started
        </button>
    </div> */}
</nav>

    </div>
  )
}

export default Navbar
