import React, { useState } from 'react'

const Faq = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
      setIsOpen(!isOpen);
    };
  

  return (
    <div>
        <div id="FAQ" class="md:my-10 py-5 default_cursor_cs default_cursor_land">
            <div class="inner-cont mx-10 mb-10 lg:w-1/2 md:w-2/3 default_cursor_cs default_cursor_land">
                <div class="smallertex aos-init aos-animate" data-aos="fade-up">
                    <div class="inner-smaller-text flex items-center font-semibold my-2 uppercase text-sm default_cursor_cs default_cursor_land">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-[#0052FF]">
                            <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 
                            0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd">
                            </path>
                            <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 
                            8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 
                            0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z">
                            </path>
                        </svg>
                        <p>queries</p>
                    </div>
                </div>
                <div class="larger-text text-2xl font-bold capitalize aos-init default_cursor_cs default_cursor_land aos-animate" data-aos="fade-left">You Got 
                    <span class="text-[#0052FF]">  questions?</span>   we got       
                    <span class="text-[#0052FF]">  answers!</span>
                </div>
                <div class="text-writeUp text-sm my-3 aos-init aos-animate" data-aos="fade-left">
                    <p class="default_cursor_cs default_cursor_land"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p> 
                </div>
            </div>
            <div class="faq-cont mx-10 default_cursor_cs default_cursor_land">
                <div 
                class="grid grid-cols-1 transition-all sadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] 
                rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-6 default_cursor_cs default_cursor_land" 
                data-orientation="vertical">
                    <div data-state="closed" data-orientation="vertical" class="border-b aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <h3 data-orientation="vertical" data-state="closed" class="flex">
                            <button 
                            type="button" 
                            aria-controls="radix-:r4:" 
                            aria-expanded="false" 
                            data-state="closed"
                            onClick={toggleContent}
                            data-orientation="vertical" 
                            id="radix-:r3:" 
                            class="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline" 
                            data-radix-collection-item="">How can I get started with your platform?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </h3>
                        <div hidden={!isOpen} data-state="closed" id="radix-:r4:" role="region" aria-labelledby="radix-:r3:" data-orientation="vertical" 
                        style={{
                            height: isOpen ? 'auto' : '0',
                            transition: 'height 0.3s ease-out',
                            overflow: 'hidden',
                          }} 
                          className={`overflow-hidden text-sm ${isOpen ? 'transition ease-in-out duration-300' : 'transition ease-in-out duration-300'}`} 
                        // style={{--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);}}
                        >
                            <div className={`pb-4 pt-0 default_cursor_cs default_cursor_land ${isOpen ? 'opacity-100' : 'opacity-0'}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                    </div>
                    <div data-state="closed" data-orientation="vertical" class="border-b aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <h3 data-orientation="vertical" data-state="closed" class="flex">
                            <button 
                            type="button" 
                            aria-controls="radix-:r4:" 
                            aria-expanded="false" 
                            data-state="closed"
                            onClick={toggleContent}
                            data-orientation="vertical" 
                            id="radix-:r3:" 
                            class="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline" 
                            data-radix-collection-item="">What payment method do we support?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </h3>
                        <div hidden={!isOpen} data-state="closed" id="radix-:r4:" role="region" aria-labelledby="radix-:r3:" data-orientation="vertical" 
                        style={{
                            height: isOpen ? 'auto' : '0',
                            transition: 'height 0.3s ease-out',
                            overflow: 'hidden',
                          }} 
                          className={`overflow-hidden text-sm ${isOpen ? 'transition ease-in-out duration-300' : 'transition ease-in-out duration-300'}`} 
                        // style={{--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);}}
                        >
                            <div className={`pb-4 pt-0 default_cursor_cs default_cursor_land ${isOpen ? 'opacity-100' : 'opacity-0'}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                    </div>
                    <div data-state="closed" data-orientation="vertical" class="border-b aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <h3 data-orientation="vertical" data-state="closed" class="flex">
                            <button 
                            type="button" 
                            aria-controls="radix-:r4:" 
                            aria-expanded="false" 
                            data-state="closed"
                            onClick={toggleContent}
                            data-orientation="vertical" 
                            id="radix-:r3:" 
                            class="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline" 
                            data-radix-collection-item="">Are my funds safe with your platform?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </h3>
                        <div hidden={!isOpen} data-state="closed" id="radix-:r4:" role="region" aria-labelledby="radix-:r3:" data-orientation="vertical" 
                        style={{
                            height: isOpen ? 'auto' : '0',
                            transition: 'height 0.3s ease-out',
                            overflow: 'hidden',
                          }} 
                          className={`overflow-hidden text-sm ${isOpen ? 'transition ease-in-out duration-300' : 'transition ease-in-out duration-300'}`} 
                        // style={{--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);}}
                        >
                            <div className={`pb-4 pt-0 default_cursor_cs default_cursor_land ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</div>
                        </div>
                    </div>
                    <div data-state="closed" data-orientation="vertical" class="border-b aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <h3 data-orientation="vertical" data-state="closed" class="flex">
                            <button 
                            type="button" 
                            aria-controls="radix-:r4:" 
                            aria-expanded="false" 
                            data-state="closed"
                            onClick={toggleContent}
                            data-orientation="vertical" 
                            id="radix-:r3:" 
                            class="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline" 
                            data-radix-collection-item="">Do you provide customer support?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </h3>
                        <div hidden={!isOpen} data-state="closed" id="radix-:r4:" role="region" aria-labelledby="radix-:r3:" data-orientation="vertical" 
                        style={{
                            height: isOpen ? 'auto' : '0',
                            transition: 'height 0.3s ease-out',
                            overflow: 'hidden',
                          }} 
                          className={`overflow-hidden text-sm ${isOpen ? 'transition ease-in-out duration-300' : 'transition ease-in-out duration-300'}`} 
                        // style={{--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);}}
                        >
                            <div className={`pb-4 pt-0 default_cursor_cs default_cursor_land ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                    </div>
                    <div data-state="closed" data-orientation="vertical" class="border-b aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <h3 data-orientation="vertical" data-state="closed" class="flex">
                            <button 
                            type="button" 
                            aria-controls="radix-:r4:" 
                            aria-expanded="false" 
                            data-state="closed"
                            onClick={toggleContent}
                            data-orientation="vertical" 
                            id="radix-:r3:" 
                            class="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline" 
                            data-radix-collection-item="">Can I trade on mobile devices?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </h3>
                        <div hidden={!isOpen} data-state="closed" id="radix-:r4:" role="region" aria-labelledby="radix-:r3:" data-orientation="vertical" 
                        style={{
                            height: isOpen ? 'auto' : '0',
                            transition: 'height 0.3s ease-out',
                            overflow: 'hidden',
                          }} 
                          className={`overflow-hidden text-sm ${isOpen ? 'transition ease-in-out duration-300' : 'transition ease-in-out duration-300'}`} 
                        // style={{--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);}}
                        >
                            <div className={`pb-4 pt-0 default_cursor_cs default_cursor_land ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                    <div data-state="closed" data-orientation="vertical" class="border-b aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <h3 data-orientation="vertical" data-state="closed" class="flex">
                            <button 
                            type="button" 
                            aria-controls="radix-:r4:" 
                            aria-expanded="false" 
                            data-state="closed"
                            onClick={toggleContent}
                            data-orientation="vertical" 
                            id="radix-:r3:" 
                            class="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline" 
                            data-radix-collection-item="">How can I withdraw my profits?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </h3>
                        <div hidden={!isOpen} data-state="closed" id="radix-:r4:" role="region" aria-labelledby="radix-:r3:" data-orientation="vertical" 
                        style={{
                            height: isOpen ? 'auto' : '0',
                            transition: 'height 0.3s ease-out',
                            overflow: 'hidden',
                          }} 
                          className={`overflow-hidden text-sm ${isOpen ? 'transition ease-in-out duration-300' : 'transition ease-in-out duration-300'}`} 
                        // style={{--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);}}
                        >
                            <div className={`pb-4 pt-0 default_cursor_cs default_cursor_land ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-center aos-init default_cursor_cs default_cursor_land" data-aos="fade-up" data-aos-delay="1300">
                    <button class=" my-5 flex items-center bg-[#181717] text-sm md:text-base text-white rounded-xl px-6 py-4 font-bold mt-4">
                        <p>Show more</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-1 transition-transform rotate-0">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 
                            0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq;