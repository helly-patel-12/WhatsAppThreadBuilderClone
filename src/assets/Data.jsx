// import './css/Main.css'

function App() {

    return (
        <>

            <section aria-label="Block settings">
                <div class="mt-4 w-[380px] rounded-2xl bg-white p-0 px-1 pb-4 2xl:w-[440px]">
                    <div class="relative">
                        <button type="button" class="absolute left-0 top-1 z-10 h-full w-5 rounded-t-2xl bg-white hover:animate-pulse focus:ring-transparent">
                            <p class="sr-only">Scroll the blocks menu to the left</p>
                        </button>
                        <div class="relative border-b-2 border-gray-200">
                            <nav aria-label="Block Types" class="scroll-none mx-5 -mb-[2px] flex snap-x overflow-auto overflow-x-hidden overscroll-none" style="scroll-behavior: smooth;">
                                <button id="Text" class="no-focus grow cursor-pointer snap-start whitespace-nowrap border-b-2 p-4 text-center font-medium border-primary text-primary-emphasis" aria-current="page">Text</button>
                                <button id="Image" class="no-focus grow cursor-pointer snap-start whitespace-nowrap border-b-2 p-4 text-center font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">Image</button>
                                <button id="Video/GIF" class="no-focus grow cursor-pointer snap-start whitespace-nowrap border-b-2 p-4 text-center font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">Video/GIF/File</button>
                                <button id="Audio" class="no-focus grow cursor-pointer snap-start whitespace-nowrap border-b-2 p-4 text-center font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">Audio</button>
                                <button id="Buttons" class="no-focus grow cursor-pointer snap-start whitespace-nowrap border-b-2 p-4 text-center font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">Buttons</button>
                                <button id="Product" class="no-focus grow cursor-pointer snap-start whitespace-nowrap border-b-2 p-4 text-center font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">Product</button>
                            </nav>
                        </div>
                        <button type="button" class="absolute right-0 top-1 z-10 h-full w-5 rounded-tr-2xl bg-white hover:animate-pulse focus:ring-transparent">
                            <p class="sr-only">Scroll the blocks menu to the right</p>
                            <div class="opacity-100 scale-100">
                                <svg class="text-primary absolute right-1 top-1/2 -translate-y-[calc(50%+4px)] -rotate-90 scale-x-125" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.5L6 6.5L1 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div class="flex items-center justify-between gap-6">
                        <div class="mt-4 grow pl-4" id="headlessui-radiogroup-:rl:" role="radiogroup" aria-labelledby="headlessui-label-:rm:">
                            <label class="sr-only" id="headlessui-label-:rm:" role="none">Choose a sender</label>
                            <div class="bg-gray-25 grid grid-cols-2 rounded-md border border-gray-300" role="none">
                                <div class="flex cursor-pointer items-center justify-center p-1.5 font-medium aria-disabled:cursor-not-allowed sm:flex-1 order-1 bg-secondary z-[1] rounded border-transparent text-white" id="headlessui-radiogroup-option-:rn:" role="radio" aria-checked="true" tabindex="0" data-headlessui-state="checked" aria-labelledby="headlessui-label-:ro:"><p class="flex items-center gap-2" id="headlessui-label-:ro:">
                                    <svg class="" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.348 2.771C7.71613 2.4234 10.1065 2.24927 12.5 2.25C14.93 2.25 17.317 2.428 19.652 2.77C21.63 3.062 23 4.794 23 6.74V12.76C23 14.706 21.63 16.438 19.652 16.73C17.712 17.014 15.736 17.185 13.73 17.235C13.6303 17.2369 13.5351 17.277 13.464 17.347L9.28 21.53C9.17511 21.6348 9.04153 21.7061 8.89614 21.735C8.75074 21.7639 8.60004 21.749 8.46308 21.6923C8.32611 21.6356 8.20903 21.5395 8.12661 21.4163C8.04419 21.2931 8.00013 21.1482 8 21V17.045C7.11329 16.9639 6.22895 16.8585 5.348 16.729C3.37 16.439 2 14.705 2 12.759V6.741C2 4.795 3.37 3.061 5.348 2.771Z" fill="white"></path></svg>
                                    <span>Company</span>
                                </p>
                                </div>
                                <div class="flex cursor-pointer items-center justify-center rounded-r-md p-1.5 font-medium aria-disabled:cursor-not-allowed sm:flex-1 order-2 bg-gray-200 text-gray-400 hover:bg-gray-300" id="headlessui-radiogroup-option-:rp:" role="radio" aria-checked="false" tabindex="-1" data-headlessui-state="" aria-labelledby="headlessui-label-:rq:">
                                    <p class="flex items-center gap-2" id="headlessui-label-:rq:">
                                        <svg class="" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.652 2.771C17.2839 2.4234 14.8935 2.24927 12.5 2.25C10.07 2.25 7.683 2.428 5.348 2.77C3.37 3.062 2 4.794 2 6.74V12.76C2 14.706 3.37 16.438 5.348 16.73C7.288 17.014 9.264 17.185 11.27 17.235C11.3697 17.2369 11.4649 17.277 11.536 17.347L15.72 21.53C15.8249 21.6348 15.9585 21.7061 16.1039 21.735C16.2493 21.7639 16.4 21.749 16.5369 21.6923C16.6739 21.6356 16.791 21.5395 16.8734 21.4163C16.9558 21.2931 16.9999 21.1482 17 21V17.045C17.8867 16.9639 18.771 16.8585 19.652 16.729C21.63 16.439 23 14.705 23 12.759V6.741C23 4.795 21.63 3.061 19.652 2.771Z" fill="white"></path></svg>
                                        <span>User</span></p></div></div></div><div class="flex gap-3 pr-4 pt-4"><button class="disabled:cursor-not-allowed disabled:opacity-50"><svg class="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 2.25H3.375C2.75368 2.25 2.25 2.75368 2.25 3.375V14.625C2.25 15.2463 2.75368 15.75 3.375 15.75H14.625C15.2463 15.75 15.75 15.2463 15.75 14.625V3.375C15.75 2.75368 15.2463 2.25 14.625 2.25Z" stroke="#25D366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.6875 10.5V8.22667L9.65625 9.36333L11.625 10.5L9.65625 11.6367L7.6875 12.7733V10.5Z" fill="#25D366" stroke="#25D366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.25 5.625H15.75" stroke="#25D366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.375 2.25L10.125 5.625" stroke="#25D366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.875 2.25L5.625 5.625" stroke="#25D366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </button>
                            <button class="tooltip before:-translate-x-[80%]" data-tooltip="Switch between company and user message">
                                <svg class="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="overflow-auto p-4 text-sm text-[#52525b] max-h-[calc(100vh-430px)]">
                            <span class="sr-only">Text Message Editor</span>
                            <div class="mx-auto w-full max-w-6xl rounded-xl bg-white text-black">
                                <div class="overflow-hidden rounded-md">
                                    <div class="flex w-full gap-5 px-2 py-3 text-xl text-gray-600">
                                        <button>
                                            <svg class="" width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40625 11.625H0.625V0.375H5.9375C6.56385 0.375037 7.1771 0.554345 7.70482 0.891741C8.23253 1.22914 8.65264 1.71052 8.91554 2.27903C9.17843 2.84754 9.27312 3.47942 9.18841 4.10001C9.1037 4.72061 8.84314 5.30399 8.4375 5.78125C8.96733 6.20497 9.35279 6.78251 9.54082 7.43435C9.72886 8.0862 9.71022 8.7803 9.48748 9.42112C9.26474 10.0619 8.84884 10.6179 8.29704 11.0126C7.74524 11.4073 7.08466 11.6213 6.40625 11.625ZM2.5 9.75H6.39375C6.57842 9.75 6.76128 9.71363 6.9319 9.64296C7.10251 9.57229 7.25754 9.4687 7.38812 9.33812C7.5187 9.20754 7.62228 9.05251 7.69296 8.8819C7.76363 8.71128 7.8 8.52842 7.8 8.34375C7.8 8.15908 7.76363 7.97622 7.69296 7.8056C7.62228 7.63499 7.5187 7.47996 7.38812 7.34938C7.25754 7.2188 7.10251 7.11521 6.9319 7.04454C6.76128 6.97387 6.57842 6.9375 6.39375 6.9375H2.5V9.75ZM2.5 5.0625H5.9375C6.12217 5.0625 6.30503 5.02613 6.47565 4.95546C6.64626 4.88478 6.80129 4.7812 6.93187 4.65062C7.06245 4.52004 7.16604 4.36501 7.23671 4.1944C7.30738 4.02378 7.34375 3.84092 7.34375 3.65625C7.34375 3.47158 7.30738 3.28872 7.23671 3.1181C7.16604 2.94749 7.06245 2.79246 6.93187 2.66188C6.80129 2.5313 6.64626 2.42772 6.47565 2.35704C6.30503 2.28637 6.12217 2.25 5.9375 2.25H2.5V5.0625Z" fill="#212529"></path></svg>
                                        </button>
                                        <button>
                                            <svg class="" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.625 1.625V0.375H3.5V1.625H6.7125L3.98125 10.375H0.375V11.625H8.5V10.375H5.2875L8.01875 1.625H11.625Z" fill="#212529"></path></svg>
                                        </button>
                                        <button>
                                            <svg class="" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2813 1.225C17.9329 0.875397 17.5189 0.598009 17.0631 0.408738C16.6073 0.219468 16.1186 0.12204 15.625 0.12204C15.1315 0.12204 14.6428 0.219468 14.187 0.408738C13.7312 0.598009 13.3172 0.875397 12.9688 1.225L13.8563 2.1125C14.089 1.87981 14.3652 1.69523 14.6692 1.56931C14.9733 1.44338 15.2991 1.37856 15.6282 1.37856C15.9572 1.37856 16.2831 1.44338 16.5871 1.56931C16.8911 1.69523 17.1674 1.87981 17.4 2.1125C17.6327 2.34518 17.8173 2.62142 17.9432 2.92544C18.0692 3.22946 18.134 3.5553 18.134 3.88437C18.134 4.21344 18.0692 4.53928 17.9432 4.8433C17.8173 5.14732 17.6327 5.42356 17.4 5.65625L12.4 10.6562C11.9309 11.1262 11.2944 11.3905 10.6304 11.3911C9.96638 11.3917 9.32935 11.1285 8.85942 10.6594C8.38949 10.1903 8.12515 9.5537 8.12457 8.8897C8.12398 8.22571 8.38719 7.58868 8.85629 7.11875L9.73754 6.23125L8.85629 5.34375L7.96879 6.23125C7.61919 6.57963 7.3418 6.99361 7.15253 7.44943C6.96326 7.90524 6.86583 8.39394 6.86583 8.8875C6.86583 9.38105 6.96326 9.86975 7.15253 10.3256C7.3418 10.7814 7.61919 11.1954 7.96879 11.5437C8.67597 12.2419 9.63134 12.6308 10.625 12.625C11.1205 12.627 11.6114 12.5309 12.0695 12.3421C12.5276 12.1533 12.9437 11.8756 13.2938 11.525L18.2938 6.525C18.9944 5.82021 19.3866 4.86616 19.3842 3.87241C19.3819 2.87866 18.9852 1.92647 18.2813 1.225Z" fill="#212529"></path><path d="M2.61879 12.5125C2.38541 12.2802 2.20022 12.0041 2.07386 11.7C1.94749 11.3959 1.88244 11.0699 1.88244 10.7406C1.88244 10.4113 1.94749 10.0853 2.07386 9.78123C2.20022 9.47715 2.38541 9.20104 2.61879 8.96875L7.61879 3.96875C7.85109 3.73537 8.1272 3.55018 8.43127 3.42381C8.73534 3.29745 9.06138 3.2324 9.39067 3.2324C9.71995 3.2324 10.046 3.29745 10.3501 3.42381C10.6541 3.55018 10.9302 3.73537 11.1625 3.96875C11.3944 4.20287 11.577 4.48116 11.6994 4.78713C11.8218 5.0931 11.8815 5.42052 11.875 5.75C11.8769 6.0805 11.8133 6.4081 11.6878 6.71385C11.5623 7.01959 11.3774 7.29742 11.1438 7.53125L9.81879 8.875L10.7063 9.7625L12.0313 8.4375C12.7366 7.73219 13.1328 6.77558 13.1328 5.77812C13.1328 4.78066 12.7366 3.82406 12.0313 3.11875C11.326 2.41344 10.3694 2.0172 9.37192 2.0172C8.37446 2.0172 7.41785 2.41344 6.71254 3.11875L1.71254 8.11875C1.362 8.46725 1.08382 8.88161 0.893994 9.33801C0.704168 9.7944 0.606445 10.2838 0.606445 10.7781C0.606445 11.2724 0.704168 11.7618 0.893994 12.2182C1.08382 12.6746 1.362 13.089 1.71254 13.4375C2.42431 14.1303 3.38185 14.5124 4.37504 14.5C5.37698 14.501 6.33862 14.1055 7.05004 13.4L6.16254 12.5125C5.93025 12.7459 5.65413 12.9311 5.35006 13.0574C5.04599 13.1838 4.71995 13.2488 4.39067 13.2488C4.06138 13.2488 3.73534 13.1838 3.43127 13.0574C3.1272 12.9311 2.85109 12.7459 2.61879 12.5125Z" fill="#212529"></path></svg>
                                        </button>
                                        <button>
                                            <svg class="" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path></svg>
                                        </button>
                                    </div>
                                    <div class="h-24 w-full rounded border border-gray-300 px-1">
                                        <div>
                                            <div contenteditable="true" translate="no" class="tiptap ProseMirror" tabindex="0">
                                                <p>Your text</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="relative mt-1 flex rounded-md">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg class="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.875C4.5125 0.875 0.875 4.5125 0.875 9C0.875 13.4875 4.5125 17.125 9 17.125C13.4875 17.125 17.125 13.4875 17.125 9C17.125 4.5125 13.4875 0.875 9 0.875ZM9.625 4C9.625 3.83424 9.55915 3.67527 9.44194 3.55806C9.32473 3.44085 9.16576 3.375 9 3.375C8.83424 3.375 8.67527 3.44085 8.55806 3.55806C8.44085 3.67527 8.375 3.83424 8.375 4V9C8.375 9.345 8.655 9.625 9 9.625H12.75C12.9158 9.625 13.0747 9.55915 13.1919 9.44194C13.3092 9.32473 13.375 9.16576 13.375 9C13.375 8.83424 13.3092 8.67527 13.1919 8.55806C13.0747 8.44085 12.9158 8.375 12.75 8.375H9.625V4Z" fill="#A1A1AA"></path></svg>
                                    </div>
                                    <input type="text" placeholder="Time" class="pl-10 w-[100px] rounded-r-none" value="12:00" />
                                    <button type="button" class="relative -ml-px inline-flex w-[57px] items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">PM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center border-t px-4 pt-6 gap-2">
                        <div class="flex grow gap-1.5 flex-col">
                            <div class="flex grow gap-2">
                                <div class="flex gap-1.5">
                                    <button disabled="" class="flex w-full items-center justify-center rounded-md border border-blue-600 bg-white px-2 py-1 text-center font-medium text-blue-600 shadow-sm hover:bg-red-50 focus:ring-blue-500 disabled:opacity-50">
                                        <span class="sr-only">Move up in order</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path></svg>
                                    </button>
                                    <button disabled="" class="flex w-full items-center justify-center rounded-md border border-blue-600 bg-white px-2 py-1 text-center font-medium text-blue-600 shadow-sm hover:bg-red-50 focus:ring-blue-500 disabled:opacity-50">
                                        <span class="sr-only">Move down in order</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                                    </button>
                                </div>
                                <button class="w-full rounded-md border border-blue-600 bg-white px-6 py-2 font-medium text-blue-600 shadow-sm hover:bg-red-50 focus:ring-blue-500">Reply</button>
                                <button class="w-full rounded-md border border-red-600 bg-white px-6 py-2 font-medium text-red-600 shadow-sm hover:bg-red-50 focus:ring-red-500">Delete</button>
                            </div>
                            <button class="bg-primary hover:bg-primary-emphasis grow rounded-md border border-transparent px-8 py-2 text-base font-medium text-white shadow-sm">Save</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default App