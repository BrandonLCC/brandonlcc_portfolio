
function formContact() {
    return (
    

<div class="w-full py-20 px-6 flex items-center justify-center">
    <div class="w-full max-w-[1120px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
    
        <div class="flex flex-col justify-start pt-1">
            <div class="flex items-center gap-2.5 mb-6">
                <span class="subtitle-purple font-bold  text-4xl sm:text-5xl md:text-6xl lg:text-6xl">CONTACT</span>
            </div>
            <h1 class="text-4xl font-medium text-zinc-900 mb-3 sm:mb-5">Let’s Start a Conversation</h1>
            <p class="text-base text-zinc-400 leading-relaxed max-w-[420px]">
                Have a question or need help? Reach out and our team will get back to you as soon as possible.
            </p>
        </div>

        <div class="flex flex-col gap-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-2.5">
                    <label class="text-zinc-400 text-sm">First Name</label>
                    <input type="text" placeholder="John" class="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors" />
                </div>
                <div class="flex flex-col gap-2.5">
                    <label class="text-zinc-400 text-sm">Last Name</label>
                    <input type="text" placeholder="Doe" class="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors" />
                </div>
            </div>
            
            <div class="flex flex-col gap-2.5">
                <label class="text-zinc-400 text-sm">Email</label>
                <input type="email" placeholder="john@gmail.com" class="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors" />
            </div>

            <div class="flex flex-col gap-2.5">
                <label class="text-zinc-400 text-sm">Message</label>
                <textarea placeholder="Hi, I'd like to know more about your services..." rows="6" class="w-full px-3.5 py-3 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors resize-none"></textarea>
            </div>

            <button class="w-full mt-1 bg-black hover:bg-zinc-900 border border-zinc-300 text-white text-sm font-medium py-3 rounded-sm transition-colors cursor-pointer">
                Submit
            </button>
        </div>
    </div>

    
</div>
    )

}

export default formContact;